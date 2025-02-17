const Background = () => {
  return (
    <>
      <div>
        <h3 className="mb-5 text-primary-dark">Background</h3>
        <div className="mb-20 grid w-full grid-cols-2 gap-x-5 gap-y-16">
          <div className="h-50 bg-primary-light p-5 text-primary-dark">
            <h2 className="mb-3">Title</h2>
            <p className="line-clamp-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod natus cum modi possimus repellendus et
              laborum aliquid quaerat? Exercitationem laudantium labore sunt? Hic perspiciatis, iste fugit nemo ipsam
              minima. Ipsa perspiciatis illo facilis beatae consectetur reiciendis qui libero, aliquid cumque, deleniti
              sapiente laboriosam, iusto ipsam nemo minima ullam maxime molestias.
            </p>
          </div>
          <div className="h-50 bg-secondary-light p-5">
            <h2 className="mb-3">Title</h2>
            <p className="line-clamp-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod natus cum modi possimus repellendus et
              laborum aliquid quaerat? Exercitationem laudantium labore sunt? Hic perspiciatis, iste fugit nemo ipsam
              minima. Ipsa perspiciatis illo facilis beatae consectetur reiciendis qui libero, aliquid cumque, deleniti
              sapiente laboriosam, iusto ipsam nemo minima ullam maxime molestias.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
