from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, "home.html")


# @login required means : ONLY LOGGED IN USERS CAN ACCESS THIS PAGE / USE THIS RESOURCE
@login_required
def computer_menu(request):
    return render(request, "computer_menu.html")

@login_required
def game_page(request):
    context = {
        "mode": "Play With Computer"
    }
    # For Now Just Hard Code the Mode Name ,later change it, when play online will be added.
    return render(request, "game.html",context)