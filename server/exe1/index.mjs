"use strict"
import dayjs from 'dayjs'

function Answer (text,userId,date,score=0) {
    this.text = text;
    this.userId = userId;
    this.date = dayjs(date);
    this.score = score;
}

function Question (text,userId,date) {
    this.text = text;
    this.userId = userId;
    this.date = dayjs(date);
    this.answers = [];

    this.addAnswer = (ans) => {
        this.answers.push(ans);
    }

    this.getAnswer = (specificUserId) => {
        const specificUserAnswer = [];

        for (const ans of this.answers){
            if (ans.userId === specificUserId){
                specificUserAnswer.push(ans)
            }
        }

        return specificUserAnswer;
    }
    this.afterDate = (specificDate) => {
        const afterDateAnswers =[]
        for (const checkdate of this.answers){
            if (checkdate.date .isAfter(specificDate)){
                afterDateAnswers.push(checkdate);

            }
        }return afterDateAnswers;
    }
    this.listScore = () => {
        return [...this.answers].sort((a,b) => b.score - a.score)
    }
}

const q1 = new Question("how long is this exercise?",1,"2026-02-27")

const a1 = new Answer ("too much",2,"2026-04-11",10)
const a2 = new Answer ("short",2,"2026-04-05",5)
const a3 = new Answer ("10 min",3,"2026-02-26",40)

q1.addAnswer(a1);
q1.addAnswer(a2);
q1.addAnswer(a3);

const user2 = q1.getAnswer(2);

//console.log(user2);
const yesterday = dayjs ("2026-01-01")
const dateAfterYesterday = q1.afterDate (yesterday)
//console.log (dateAfterYesterday)
const ListedByScore = q1.listScore ()
console.log(ListedByScore)