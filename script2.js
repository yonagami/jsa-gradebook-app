const SCORE_A_BEST = 100;
const SCORE_A_MAX = 99;
const SCORE_A_MIN = 90;
const SCORE_B_MAX = 89;
const SCORE_B_MIN = 80;
const SCORE_C_MAX = 79;
const SCORE_C_MIN = 70;
const SCORE_D_MAX = 69;
const SCORE_D_MIN = 60;
const SCORE_F_MAX = 59;
const SCORE_F_MIN = 0;

const GRADE_A_BEST="A++";
const GRADE_A ="A";
const GRADE_B ="B";
const GRADE_C ="C";
const GRADE_D ="D";
const GRADE_F ="F";

function getGrade(score) {
  let grade = GRADE_F;
  if (score == SCORE_A_BEST) {
    grade = GRADE_A_BEST;
  } else if (score >= SCORE_A_MIN && score <= SCORE_A_MAX) {
    grade = GRADE_A; 
  } else if (score >= SCORE_B_MIN && score <= SCORE_B_MAX) {
    grade = GRADE_B; 
  } else if (score >= SCORE_C_MIN && score <= SCORE_C_MAX) {
    grade = GRADE_C; 
  } else if (score >= SCORE_D_MIN && score <= SCORE_D_MAX) {
    grade = GRADE_D; 
  } else if (score >= SCORE_F_MIN && score <= SCORE_F_MAX) {
    grade = GRADE_F; 
  }

  return grade;
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
