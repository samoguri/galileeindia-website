function ServiceTimes() {
  const services = [
    {
      title: "Sunday Worship",
      day: "Every Sunday",
      time: "10:30 AM – 12:30 PM",
      color: "#0B4F9C",
    },
    {
      title: "Sunday School",
      day: "Every Sunday",
      time: "11:30 AM – 12:30 PM",
      note: "Children will be taken to Sunday School at 11:30 AM and safely returned to their parents at 12:30 PM.",
      color: "#198754",
    },
    {
      title: "Women's Fellowship",
      day: "Every Friday",
      time: "11:00 AM – 1:30 PM",
      color: "#6F42C1",
    },
    {
      title: "Fasting Prayer",
      day: "Every Saturday",
      time: "7:30 PM – 9:00 PM",
      color: "#FD7E14",
    },
    {
      title: "Wednesday Prayer Meeting",
      day: "Launching Soon",
      time: "7:30 PM – 8:30 PM",
      color: "#DC3545",
    },
  ];

  return (
    <section
      style={{
        background: "#f7f9fc",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#0B4F9C",
          marginBottom: "50px",
          fontSize: "40px",
        }}
      >
        Weekly Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {services.map((service) => (
          <div
            key={service.title}
            style={{
              background: "white",
              borderTop: `6px solid ${service.color}`,
              borderRadius: "12px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >
            <h3>{service.title}</h3>

            <p>
              <strong>{service.day}</strong>
            </p>

            <p>{service.time}</p>

            {service.note && (
              <p
                style={{
                  marginTop: "15px",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                {service.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceTimes;