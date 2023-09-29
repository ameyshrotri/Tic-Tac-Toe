function Profile() {
  return (
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"></img>
  );
}

export default function Gallery() {
  return (
    <div>
      <div style={{ height: 100, backgroundColor: "aqua", marginBottom: 5 }}>
        <h1
          style={{
            width: 100 + "vw",
            margin: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          Images
        </h1>
      </div>
      <div
        style={{
          backgroundColor: "aqua",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}
