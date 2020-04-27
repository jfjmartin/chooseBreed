function watchForm (){
    $('#breed').change(function(event){
        var  breed = $('#breed').val()
       getPhoto(breed)
    })
   }
   function getPhoto(name) {
       console.log(name)
       fetch(`https://dog.ceo/api/breed/${name}/images/random`)
       .then(response => response.json())
       .then(responseJson => renderPhoto(responseJson))
       .catch(error => alert('Something went wrong. Try again later.'));
   }
function renderPhoto(object){
    $('.picture').html(`
    <h1>Your dog</h1>
    <img src=${object.message} alt="Hmmm. Not Sure Why That's Not Loading.....">`)
}



$(function (){
    console.log(`'js' up and running`)
    watchForm();
})