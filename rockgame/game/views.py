from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def home(request):
    return render(request, "home.html")

@login_required
def computer_menu(request):
    return render(request, "computer_menu.html")

@login_required
def game_page(request, mode):
    return render(request, "game.html", {"mode": mode})