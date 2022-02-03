// Your Code Here+
let Ans1 = window.prompt('Do you head left, or right?')
if (Ans1 === 'left') {
    let Ans2 = window.prompt('You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?')
    if (Ans2 === 'follow') {
        let Ans3 = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven. Do you stay, or spread the word?')
            if (Ans3 === 'stay') {
                let Ans4 = window.alert('You live happily amongst the cats for the rest of your days.')
            }
            else if (Ans3 === 'spread the word') {
                let Ans4 = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
            }
    }
    else if (Ans2 === 'continue') {
        console.log('it works?')
        let Ans3 = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
            if (Ans3 === 'ladder') {
                let Ans4 = window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
            }
            else if (Ans3 === 'staircase') {
                let Ans4 = window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')
            }        
    }
}


else if (Ans1 === 'right') {
    let Ans2 = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Do you attempt to take the treasure or do you continue down the path?')
        if (Ans2 ==='take the treasure') {
            let Ans3 = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:')
                if (Ans3 === 'stay') {
                    let Ans4 = window.alert('You and the dragon have an uplifting conversation about local politics and become lifelong friends.')
                }
                else if (Ans3 === 'run') {
                    let Ans4 = window.alert("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
                }

        }
        else if (Ans2 === 'continue') {
            let Ans3 = window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
            if (Ans3 === 'draw it') {
                let Ans4 = window.alert('You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.')
            }
            else if (Ans3 === 'pick it') {
                let Ans4 = window.alert('You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.')
            }
                
        }
}