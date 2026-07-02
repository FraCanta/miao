const SectionIndex = ({ children }) => {
  return (
    <div
      className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-red md:text-xs 3xl:text-base"
      aria-hidden="true"
    >
      <span>{children}</span>
    </div>
  );
};

export default SectionIndex;
