export default function Carousel() {
  return (
    <div className="carouselWrapper">
      <div className="carouselContainer">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src="https://media.istockphoto.com/id/182032452/photo/chairoplane.jpg?s=1024x1024&w=is&k=20&c=oU4y4_JYx7FkPB0SxqO4o8865ALLRgra94Fl3Cuo3YA="
            className="carouselImage"
            alt="Chairoplane ride"
          />
        ))}
      </div>
    </div>
  );
}
