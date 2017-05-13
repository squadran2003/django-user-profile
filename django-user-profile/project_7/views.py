from django.shortcuts import render
from django.conf import settings
from accounts.models import Profile


def home(request):
    has_profile = False
    if request.user.is_authenticated():
        if request.user.profile.all().count():
            has_profile = True
    return render(request, 'home.html',{'has_profile':has_profile})
