"use client";

export default function IonizingBenefits() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundColor: "#13346D",
            backgroundImage: "url('/BannerElectrica.jpg')",
            backgroundBlendMode: "multiply",
          }}
        />
      </div>
    </section>
  );
}
