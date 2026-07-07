import hero from "../../assets/hero.png";

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "700px",
        overflow: "hidden",
      }}
    >
      {/* Hero Image */}
      <img
        src={hero}
        alt="Galilee Prayer Fellowship"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "64px",
              marginBottom: "20px",
            }}
          >
            Galilee Prayer Fellowship
          </h1>

          <h2
            style={{
              color: "#FFD54F",
              marginBottom: "25px",
            }}
          >
            A Bible-believing Church in Visakhapatnam
          </h2>

          <p
            style={{
              fontSize: "28px",
              fontStyle: "italic",
            }}
          >
            "Follow Me, and I will make you fishers of men."
          </p>

          <p
            style={{
              marginTop: "10px",
              marginBottom: "35px",
            }}
          >
            Matthew 4:19
          </p>

          <button
            style={{
              background: "#FFD54F",
              color: "#0B3D91",
              padding: "15px 35px",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ▶ Watch Sermons
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;