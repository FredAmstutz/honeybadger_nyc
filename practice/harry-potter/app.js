$(document).ready(function() {
    console.log( "document loaded" );
    
    class Wizard {
        constructor(name, house, expertise) {
            this.name = name;
            this.house = house;
            this.expertise = expertise;
        }
        
        castSpell() {
            alert(this.name + ' casts Expelliarmus!');
        }
        
        brewPotion() {
            alert(this.name + ' brews some polyjuice potion!');
        }
        
        flyBroom() {
            alert(this.house + ' has won the Quidditch house cup!');
        }

        transfigure() {
            alert(this.name + ' transformed into a cat!')
        }

        party() {
            alert(this.name + ' got fucked up on some butterbeer.')
        }
    }
    
    let harry = new Wizard('Harry Potter', 'Gryffindor', 'Defense Against the Dark Arts');
    let ron = new Wizard('Ron Weasley', 'Gryffindor', 'Transfiguration');
    let draco = new Wizard('Draco Malfoy', 'Slytherin', 'Potions');

    let spell = $('#spell');
    let potion = $('#potion');
    let broom = $('#broom');
    let transfigure = $('#transfigure');
    let drink = $('#party');

    spell.hover(function() {
        harry.castSpell();
    })

    potion.hover(function() {
        harry.brewPotion();
    })

    broom.hover(function() {
        harry.flyBroom();
    })

    transfigure.hover(function() {
        harry.transfigure();
    })

    drink.hover(function() {
        harry.party();
    })

});



 