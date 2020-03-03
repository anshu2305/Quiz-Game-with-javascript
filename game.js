const startBtn = document.getElementById('strt')
const nextBtn = document.getElementById('next')

const quesContElem= document.getElementById('ques-cont')

const quesElem = document.getElementById('ques')

const ansElem = document.getElementById('ans-button')

let shuffledQ, curQueIndex

startBtn.addEventListener('click',startGame)
nextBtn.addEventListener('click',() => {
  curQueIndex++
  setNxtQ()
})

function startGame() {
   console.log('Started')
   startBtn.classList.add('hide')
   shuffledQ = ques.sort(() => Math.random() - .5)
   curQueIndex=0
   quesContElem.classList.remove('hide')
   setNxtQ()
}
function setNxtQ() {
 resetState()
 showQues(shuffledQ[curQueIndex])
}

function showQues(ques) {
  quesElem.innerText = ques.ques
  ques.ans.forEach(ans => {
  const button = document.createElement('button')
  button.innerText = ans.text
  button.classList.add('btn')
  if(ans.correct){
   button.dataset.correct = ans.correct
  }
  button.addEventListener('click',selectAns)
  ansElem.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextBtn.classList.add('hide')
  while(ansElem.firstChild){
  ansElem.removeChild(ansElem.firstChild)
  }
}

function selectAns(e){
 const slctBtn = e.target
 const correct = slctBtn.dataset.correct
 setStatusClass(document.body,correct)
 Array.from(ansElem.children).forEach(button => {
 setStatusClass(button, button.dataset.correct)
 })
 if(shuffledQ.length > curQueIndex+1){
 nextBtn.classList.remove('hide')}
 else {
 startBtn.innerText = 'Restart'
 startBtn.classList.remove('hide')
 }
}

function setStatusClass(element,correct){
 clearStatusClass(element)
 if(correct) {
 element.classList.add('correct')
 }
 else{
 element.classList.add('wrong')
 }
}

function clearStatusClass(element) {
 element.classList.remove('correct')
 element.classList.remove('wrong')
 }

const ques = [
 {
  ques: 'A person who talks in sleep is called as ?',
  ans: [
         {text: 'Philatelist',correct: false },
         {text: 'Somnambulist',correct: false },
         {text: 'Somniloquist',correct: true },
         {text: 'Oneirocritic',correct: false }
       ]
  },
  {
      ques: 'The person who knows everything is called ?',
      ans:[
          {text: 'Omnipresent',correct:false},
          {text: 'Omniscient',correct:true},
          {text: ' Omnipotent',correct:false},
          {text: 'Oblivious',correct:false}
         ]
      },
   {
     ques: 'A person who eats too much is called as _______ ?',
     ans:[
          {text: 'Glutton',correct:true},
          {text: 'Nibbler',correct:false},
          {text: 'Cannibal',correct:false},
          {text: 'Omnivore',correct:false}
          ]
    },
    {
     ques: 'Place for ammunition and weapons is called as______ ?',
     ans:[
          {text: 'Asylum',correct:false},
          {text: 'Arsenal',correct:true},
          {text: 'Archives',correct:false},
          {text: 'Acoustics',correct:false}
          ]
    },
   {
     ques: 'A person involving in an activity for pleasure and not money is called as ___?',
     ans:[
          {text: ' Amateur',correct:true},
          {text: 'Follower',correct:false},
          {text: 'Altruist',correct:false},
          {text: 'Antiquarian',correct:false}
          ]
    },
    {
     ques: '"General pardon of political offenders" is also called as ________?',
     ans:[
          {text: 'Amnesty',correct:true},
          {text: 'Despotism',correct:false},
          {text: 'Autocracy',correct:false},
          {text: 'Magnanimity',correct:false}
          ]
    }
]