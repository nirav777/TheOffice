import React from 'react'
import Card from './card'

// const data = [{
//     pic: "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
//     name: "Michael Scott",
//     job: "Manager"
// },
// {
//     pic: "https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg",
//     name: "Dwight Schrute",
//     job: "Sales"
// },
// {
//     pic: "https://upload.wikimedia.org/wikipedia/en/7/7e/Jim-halpert.jpg",
//     name: "Jim Halpert",
//     job: "Sales"
// },
// {
//     pic: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Pam_Beesley.jpg/220px-Pam_Beesley.jpg",
//     name: "Pam Beesly",
//     job: "Sales / Reception"
// }
// ]


function allCards() {
    return (
        <div className="main">

            {/* {
                data.map(
                    item => (

                        <Card
                            pic={item.pic}
                            name={item.name}
                            job={item.job}
                        />

                    )
                )
            } */}



            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png"
                name="Michael Scott"
                job="Manager"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg"
                name="Dwight Schrute"
                job="Sales"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/7/7e/Jim-halpert.jpg"
                name="Jim Halpert"
                job="Sales"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Pam_Beesley.jpg/220px-Pam_Beesley.jpg"
                name="Pam Beesly"
                job="Sales / Reception"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/d/d1/Melora_Hardin_as_Jan_Levinson.png"
                name="Jan Levinson"
                job="Manager"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/c/cd/CreedBratton%28TheOffice%29.jpg"
                name="Creed Bratton"
                job="Quality Assurance"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Erin_Hannon.jpg/250px-Erin_Hannon.jpg"
                name="Erin Hannon"
                job="Reception"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Office-1200-baumgartner1.jpg/260px-Office-1200-baumgartner1.jpg"
                name="Kevin Malone"
                job="Accounts"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/8/84/Andy_Bernard_photoshot.jpg"
                name="Andy Bernard"
                job="Sales / Manager"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/1/18/Toby_Flenderson_promo_picture.jpg"
                name="Toby Flenderson"
                job="HR Department"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Stanley_Hudson.jpg/245px-Stanley_Hudson.jpg"
                name="Stanley Hudson"
                job="Sales"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Angela_Martin.jpg/230px-Angela_Martin.jpg"
                name="Angela Martin"
                job="Accounts"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Hollytheoffice.jpg/220px-Hollytheoffice.jpg"
                name="Holly Flax"
                job="HR Department"
            >
            </Card>

            <Card
                pic="http://pm1.narvii.com/7258/0215affbc6533e4489405dd40f34bd6788e08085r1-299-435v2_00.jpg"
                name="Cathy Simms"
                job="Intern"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/6/6f/Meredith_Palmer.jpg"
                name="Meredith Palmer"
                job=""
            >
            </Card>

            <Card
                pic="https://pbs.twimg.com/media/EaGr9RYUYAEl6Ed.jpg"
                name="Karen Filippelli"
                job="Sales"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/James-spader-as-robert-california-in-the-office.jpg/220px-James-spader-as-robert-california-in-the-office.jpg"
                name="Robert California"
                job="Manager"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/9/91/Ryan_Howard_%28The_Office%29.jpg"
                name="Ryan Howard"
                job="Intern / Manager"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/6/69/Kelly_Kapoor.jpg"
                name="Kelly Kapoor"

            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Daviddenman_%28cropped%29.jpg/1200px-Daviddenman_%28cropped%29.jpg"
                name="Roy Anderson"
                job="Transports"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Nellie_Bertram.jpg/240px-Nellie_Bertram.jpg"
                name="Nellie Bertram"
                job="Sales / Manager"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Gabe_profile_picture.jpg/240px-Gabe_profile_picture.jpg"
                name="Gabe Lewis"
                job="Sabre"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/6/65/DarrylPhilbin.jpg"
                name="Darryl Philbin"
                job="Transports"
            >
            </Card>

            <Card
                pic="https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Phyllis_Lapin-Vance.jpg/220px-Phyllis_Lapin-Vance.jpg"
                name="Phyllis Vance"
                job="Sales"
            >
            </Card>

        </div>
    )
}

export default allCards
