import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
  type TouchEvent,
} from "react";
import { ContactSection } from "./ContactSection";
import ContactSectionMobile from "./ContactSectionMobile";
import type { Artwork, DesktopLayoutItem, MobileLayoutItem } from "../lib/gallery";

// ─── Caption sub-component ────────────────────────────────────────────────────
function ArtworkCaption({
  art,
  mobile,
}: {
  art: Artwork;
  mobile?: boolean;
}): JSX.Element | null {
  if (!art.title) return null;
  return (
    <div
      className="[font-family:'Antonio',Helvetica] text-black w-full"
      style={{
        fontSize: mobile
          ? "clamp(0.65rem, 4.1vw, 1rem)"
          : "clamp(0.75rem, 1.11vw, 1rem)",
        lineHeight: 1.2,
      }}
    >
      <div className="font-normal break-words">{art.title}</div>
      <div className="font-thin">{art.year}</div>
      <div className="font-thin">{art.dimensions}</div>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
type GalleryPageProps = {
  artworks: Artwork[];
  desktopLayout: DesktopLayoutItem[];
  mobileLayout: MobileLayoutItem[];
};

// ─── Component ────────────────────────────────────────────────────────────────
export function GalleryPage({
  artworks,
  desktopLayout,
  mobileLayout,
}: GalleryPageProps): JSX.Element {
  // ── Lightbox state — shared between mobile & desktop ────────────────────
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isPinching = useRef<boolean>(false);

  const openPreview = useCallback((idx: number) => {
    setCurrentIndex(idx);
    setIsPreviewOpen(true);
  }, []);
  const closePreview = useCallback(() => setIsPreviewOpen(false), []);
  const showPrev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + artworks.length) % artworks.length),
    [artworks.length],
  );
  const showNext = useCallback(
    () => setCurrentIndex((i) => (i + 1) % artworks.length),
    [artworks.length],
  );

  // diptych group map: groupId → [index, …]
  const groups = useMemo(() => {
    const map = new Map<string, number[]>();
    artworks.forEach((a, idx) => {
      if (a.groupId) {
        const arr = map.get(a.groupId) ?? [];
        arr.push(idx);
        map.set(a.groupId, arr);
      }
    });
    return map;
  }, [artworks]);

  // Keyboard navigation + body-scroll lock while lightbox is open
  useEffect(() => {
    if (!isPreviewOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    // Block single-touch scroll; allow pinch-to-zoom
    const blockScroll = (e: Event) => {
      const te = e as unknown as TouchEvent;
      if (te.touches && te.touches.length > 1) return;
      e.preventDefault();
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("touchmove", blockScroll, { passive: false });

    const savedOverflow = document.body.style.overflow;
    const savedPosition = document.body.style.position;
    const savedTop = document.body.style.top;
    const scrollY = window.scrollY;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Move focus to the close button for accessibility
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("touchmove", blockScroll);
      document.body.style.overflow = savedOverflow;
      document.body.style.position = savedPosition;
      document.body.style.top = savedTop;
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isPreviewOpen, closePreview, showPrev, showNext]);

  // Swipe handlers (attached to the lightbox overlay)
  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length > 1) {
      isPinching.current = true;
    } else {
      isPinching.current = false;
      touchStartX.current = e.touches[0].clientX;
    }
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (isPinching.current) {
      isPinching.current = false;
      touchStartX.current = null;
      return;
    }
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) showPrev();
    if (dx < -50) showNext();
    touchStartX.current = null;
  };

  // ── Lightbox content (single, shared by both layouts) ───────────────────
  const lightboxContent = (() => {
    const cur = artworks[currentIndex];
    const groupIdxs = cur.groupId ? groups.get(cur.groupId) : null;

    if (groupIdxs && groupIdxs.length > 1) {
      const group = groupIdxs.map((i) => artworks[i]);
      const main =
        group.find((a) => (a.title ?? "").trim().length > 0) ?? group[0];
      return (
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex gap-2 md:gap-8 items-center justify-center w-full">
            {group.map((a) => (
              <img
                key={a.id}
                src={a.largeSrc}
                alt={a.alt}
                className="flex-1 max-w-[45vw] max-h-[65vh] object-contain"
              />
            ))}
          </div>
          <p className="[font-family:'Antonio',Helvetica] text-black text-base md:text-xl text-center">
            {(main.title || main.alt) ?? ""}
          </p>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center gap-4">
        <img
          src={cur.largeSrc}
          alt={cur.alt}
          className="max-w-[85vw] max-h-[70vh] md:max-w-[70vw] md:max-h-[72vh] object-contain"
        />
        <p className="[font-family:'Antonio',Helvetica] text-black text-base md:text-xl text-center">
          {(cur.title || cur.alt) ?? ""}
        </p>
      </div>
    );
  })();

  // ────────────────────────────────────────────────────────────────────────
  return (
    <main aria-label="Galerie">
      {/* ══════════════════════════════════════════════════════════════════
          MOBILE GALLERY  (hidden at ≥ 768 px)
          ══════════════════════════════════════════════════════════════════

          Flow layout: each artwork is a flex row (image + caption).
          Horizontal offset via margin-left %, width via %, vertical
          spacing via margin-top in rem. No absolute positioning,
          no fixed container height — the page grows with content.
      */}
      <div className="md:hidden bg-[#d4cdc4] w-full px-2 pt-5 pb-8 overflow-hidden">
        {(() => {
          const renderedGroups = new Set<string>();
          return mobileLayout.map((item) => {
            const artIdx = artworks.findIndex((a) => a.id === item.id);
            const art = artworks[artIdx];

            // Skip secondary diptych panels (rendered with the primary)
            if (art.groupId && renderedGroups.has(art.groupId)) return null;
            if (art.groupId) renderedGroups.add(art.groupId);

            const groupArts = art.groupId
              ? artworks.filter((a) => a.groupId === art.groupId)
              : null;
            const captionArt = groupArts
              ? (groupArts.find((a) => (a.title ?? "").trim().length > 0) ?? groupArts[0])
              : art;

            const isRight = item.captionSide === "right";

            return (
              <div
                key={item.id}
                className="flex items-start gap-2"
                style={{
                  width: `${item.widthPct}%`,
                  marginLeft: `${item.marginLeftPct}%`,
                  marginTop: `${item.marginTopRem}rem`,
                  flexDirection: isRight ? "row" : "row-reverse",
                }}
              >
                {/* Image(s) — diptychs render side by side */}
                {groupArts ? (
                  <div
                    className="flex gap-1 cursor-pointer flex-1 min-w-0"
                    onClick={() => openPreview(artIdx)}
                  >
                    {groupArts.map((a) => (
                      <img
                        key={a.id}
                        src={a.smallSrc}
                        alt={a.alt}
                        loading="lazy"
                        className="w-full h-auto flex-1 min-w-0"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={art.smallSrc}
                    alt={art.alt}
                    loading="lazy"
                    className="w-full h-auto cursor-pointer flex-1 min-w-0"
                    onClick={() => openPreview(artIdx)}
                  />
                )}

                {/* Caption */}
                {captionArt.title && (
                  <div
                    className="flex items-start"
                    style={{
                      writingMode: "horizontal-tb",
                      minWidth: "5rem",
                      maxWidth: "6rem",
                      textAlign: isRight ? "left" : "right",
                      marginTop: item.captionPos?.mt,
                      marginRight: item.captionPos?.mr,
                      marginBottom: item.captionPos?.mb,
                      marginLeft: item.captionPos?.ml,
                      alignSelf: item.captionPos?.alignSelf,
                    }}
                  >
                    <ArtworkCaption art={captionArt} mobile />
                  </div>
                )}
              </div>
            );
          });
        })()}

        {/* ── Contact footer ───────────────────────────────────────────── */}
        <ContactSectionMobile className="mt-6 w-full" />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          DESKTOP GALLERY  (hidden below 768 px)
          ══════════════════════════════════════════════════════════════════

          Flow layout within a max-w-[1440px] centred container.
          Each artwork row is positioned using:
            - margin-left (% of container) for horizontal offset
            - margin-top  (% of container width) for vertical spacing
              (can be negative to create overlapping rows)
            - width       (% of container) for image sizing

          The container has no fixed height — it grows naturally.
          overflow-hidden clips any artwork that extends past the right edge
          (intentional for the staggered/overlapping gallery aesthetic).
      */}
      <div className="hidden md:block w-full bg-background">
        <div className="w-full max-w-[1440px] mx-auto overflow-hidden pb-16">
          {(() => {
            const renderedGroups = new Set<string>();
            return desktopLayout.map((item) => {
              const artIdx = artworks.findIndex((a) => a.id === item.id);
              const art = artworks[artIdx];

              // Skip secondary diptych panels (rendered with the primary)
              if (art.groupId && renderedGroups.has(art.groupId)) return null;
              if (art.groupId) renderedGroups.add(art.groupId);

              const groupArts = art.groupId
                ? artworks.filter((a) => a.groupId === art.groupId)
                : null;
              const captionArt = groupArts
                ? (groupArts.find((a) => (a.title ?? "").trim().length > 0) ?? groupArts[0])
                : art;

              const isRight = item.captionSide === "right";

              return (
                <div
                  key={item.id}
                  className="flex items-start"
                  style={{
                    width: `${item.widthPct}%`,
                    marginLeft: `${item.marginLeftPct}%`,
                    marginTop: `${item.marginTopPct}%`,
                    flexDirection: isRight ? "row" : "row-reverse",
                    gap: "clamp(0.5rem, 1.5vw, 1.5rem)",
                  }}
                >
                  {/* Image(s) — diptychs render side by side */}
                  {groupArts ? (
                    <div
                      className="flex gap-2 cursor-pointer flex-1 min-w-0"
                      onClick={() => openPreview(artIdx)}
                    >
                      {groupArts.map((a) => (
                        <img
                          key={a.id}
                          src={a.smallSrc}
                          alt={a.alt}
                          loading="lazy"
                          className="h-auto flex-1 min-w-0"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={art.smallSrc}
                      alt={art.alt}
                      loading="lazy"
                      className="h-auto cursor-pointer flex-1 min-w-0"
                      onClick={() => openPreview(artIdx)}
                    />
                  )}

                  {/* Caption — pinned to the side of the image */}
                  {captionArt.title && (
                    <div
                      className="shrink-0 flex items-start pt-2"
                      style={{
                        width: "clamp(8rem, 13.6%, 196px)",
                        textAlign: item.captionSide === "left" ? "right" : "left",
                        marginTop: item.captionPos?.mt,
                        marginRight: item.captionPos?.mr,
                        marginBottom: item.captionPos?.mb,
                        marginLeft: item.captionPos?.ml,
                        alignSelf: item.captionPos?.alignSelf,
                      }}
                    >
                      <ArtworkCaption art={captionArt} />
                    </div>
                  )}
                </div>
              );
            });
          })()}

          {/* ── Contact / footer section ───────────────────────────── */}
          <div className="mt-[6%] flex justify-center">
            <ContactSection className="w-full max-w-[560px]" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          LIGHTBOX  (single overlay shared by mobile & desktop)
          ══════════════════════════════════════════════════════════════════ */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-[#D3CCC3] flex items-center justify-center"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onClick={(e) => {
            if (e.target === e.currentTarget) closePreview();
          }}
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            aria-label="Close preview"
            onClick={closePreview}
            className="absolute top-2 right-4 md:right-10 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center text-4xl md:text-7xl leading-none text-black hover:text-[#854686] focus:outline-none transition-colors z-20"
          >
            ×
          </button>

          {/* Previous */}
          <button
            aria-label="Previous image"
            onClick={showPrev}
            className="absolute left-0 top-0 h-full px-3 md:px-6 flex items-center justify-center text-4xl md:text-6xl text-black hover:text-[#854686] select-none transition-colors z-20"
          >
            ‹
          </button>

          {/* Next */}
          <button
            aria-label="Next image"
            onClick={showNext}
            className="absolute right-0 top-0 h-full px-3 md:px-6 flex items-center justify-center text-4xl md:text-6xl text-black hover:text-[#854686] select-none transition-colors z-20"
          >
            ›
          </button>

          {/* Image + title — centred, padded clear of the nav arrows */}
          <div className="w-full h-full flex flex-col items-center justify-center px-14 md:px-24">
            {lightboxContent}
          </div>
        </div>
      )}
    </main>
  );
}
