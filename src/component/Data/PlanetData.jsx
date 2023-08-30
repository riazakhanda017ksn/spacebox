// import tx1 from "https://i.ibb.co/vkRL2cN/download.jpg";
// import tx2 from "https://i.ibb.co/2PQJFL8/download2.jpg";
// import tx3 from "https://i.ibb.co/vZtk0SR/download3.jpg";
// import tx4 from "https://i.ibb.co/PGsTXvN/download4.jpg";
// import tx5 from "https://i.ibb.co/Qn9h5Q5/download5.jpg";
// import tx6 from "https://i.ibb.co/jzHCFHy/download6.jpg";

// const random = (a, b) => a + Math.random() * b;
// const randomInt = (a, b) => Math.floor(random(a, b));
// const randomColor = () =>
//   `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;
// const shuffle = (a) => {
//   const temp = a.slice(0);
//   for (let i = temp.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [temp[i], temp[j]] = [temp[j], temp[i]];
//   }
//   return temp;
// };

// const textures = shuffle([tx1, tx2, tx3, tx4, tx5, tx6]);

// const planetData = [];
// const totalPlanets = 6;
// for (let index = 0; index < totalPlanets; index++) {
//   planetData.push({
//     id: index,
//     color: randomColor(),
//     xRadius: (index + 1.5) * 4,
//     zRadius: (index + 1.5) * 2,
//     size: random(0.5, 1),
//     speed: random(0.1, 0.6),
//     offset: random(0, Math.PI * 2),
//     rotationSpeed: random(0.01, 0.03),
//     textureMap: textures[index]
//   });
// }

export default planetData;
