let Card = document.getElementById('Card');
let Interface = document.getElementById('Interface');
function SwipeInAndOut(Card, Out, In)
{
    Card.classList.add('SwipeOutAnimation');
    setTimeout(function(){Card.classList.remove('SwipeOutAnimation', Out)}, 500);
    setTimeout(function(){Card.classList.add(In, 'SwipeInAnimation')}, 500);
    setTimeout(function(){Card.classList.remove('SwipeInAnimation')}, 1000);
}

Interface.addEventListener("mouseenter", function(Swipe)
{
    SwipeInAndOut(Card, 'Card1', 'Card2');

})

Interface.addEventListener("mouseleave", function(Swipe)
{
    SwipeInAndOut(Card, 'Card2', 'Card1');
})