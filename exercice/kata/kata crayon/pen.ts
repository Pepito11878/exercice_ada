const calendrierDuCrayon = {
  septembre: 10,
  octobre: 9,
  novembre: 8,
  decembre: 7,
  janvier: 6,
  fevrier: 5,
  mars: 4,
  avril: 3,
  mai: 2,
  juin: 1,
};

const tip = " /\\\n/__\\";
const body = "||||"
const eraser = ["|__|\n|__|", "|__|\n|  |\n|__|"]

function drawMyPen(month: keyof typeof calendrierDuCrayon) {
  const length = calendrierDuCrayon[month];

  console.log(tip);

  for (let i = 0; i < length; i++) {
    console.log(body);
  }

  const eraserLength = length <= 4 ? 0 : 1;
  console.log(eraser[eraserLength]);
}

drawMyPen("mars")