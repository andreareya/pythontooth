$.getJSON( "https://cdn.coding-days.com/codeproject.php?node=pythontooth", function( data ) {
wizard = "Score de "+JSON.stringify(data.data.wizards[4].name);
score = JSON.stringify(data.data.wizards[4].score);
$('#equipe').html(wizard);
$('#points').html(score);
});
