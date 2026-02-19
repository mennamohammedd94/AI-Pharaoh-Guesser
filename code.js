// عملت ثابت اسمه myImg
const myImg = document.querySelector("img");
// وعملت ثابت تاني بلينك اول صوره
const firstImg =
  "https://i.pinimg.com/736x/82/5c/6e/825c6e252463c2e89d4e0e7d37add561.jpg";
// وثابت تالت للصوره التانيه
const secondImg =
  "https://i.pinimg.com/736x/97/b9/62/97b962f32f8c886cce0387a008fda206.jpg";
// عملت ان لما نستخدم الفانكشن دي لو الصوره اللي موجوده الاولي بعد ما ندوس تظهر التانيه لكن لو الموجوده التانيه مثلا او الشرط مش متحقق يبقي اللي تفضل ظاهره الاولي
myImg.onclick = function () {
  if ((myImg.src = firstImg)) {
    myImg.src = secondImg;
  } else {
    myImg.src = firstImg;
  }
};
// ثابت بالاسم ده بيشاور ع البوتن
const btn = document.querySelector("button");
//  resultText ثابت بيشاور ع ال
const resultText = document.getElementById("resultText");
// لما ادوس ع البوتن تظهرلي الاسئله دي
btn.onclick = function () {
  const q1 = prompt("Do you enjoy solving mysteries? (yes/no)");
  const q2 = prompt("Do you trust your intuition? (yes/no)");
  const q3 = prompt("Do you prefer working alone? (yes/no)");
  const q4 = prompt(
    "Do you often feel connected to something bigger than you? (yes/no)"
  );
  const q5 = prompt("When do you feel more energized? (sunrise/sunset)");

  //let باستخدام  result عملت  متغير اسمه
  let result = "";
  // if الاحتمالات المتاحه هنعمل ع هيئه
  if (q1 === "yes" && q2 === "yes" && q3 === "yes" && q5 === "sunrise") {
    result = "🔮 You are like Thoth – the god of wisdom and hidden knowledge.";
  } else if (q2 === "yes" && q3 === "no" && q4 === "yes" && q5 === "sunrise") {
    result = "🌞 You are like Ra – bright, confident, and a natural leader.";
  } else if (q1 === "yes" && q3 === "yes" && q5 === "sunset") {
    result = "🌒 You are like Anubis – quiet, deep, and spiritually aware.";
  } else if (q2 === "yes" && q3 === "no" && q4 === "yes") {
    result =
      "🐱 You are like Bastet – calm, protective, and emotionally in tune.";
  } else if (q1 === "yes" && q2 === "no" && q3 === "yes" && q4 === "no") {
    result = "🦂 You are like Set – bold, independent, and a risk taker.";
  } else {
    result = "⚖️ You are like Ma’at – balanced, fair, and full of wisdom.";
  }
  // resultText في نص المتغير اللي اسمه result هنحط قيمه
  resultText.textContent = result;
};
