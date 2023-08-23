from typing import Any
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework import serializers
from .models import DailyUpdate
from django.contrib.auth import get_user_model
User = get_user_model()

from crum import get_current_user
# Create your views here.


class DailyUpdateSerializer(serializers.ModelSerializer):
    employee = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(),required=False)
    class Meta:
        model = DailyUpdate
        fields = "__all__"

    def validate(self, attrs: Any) -> Any:
        validated_data = super().validate(attrs)
        if not "employee" in validated_data:
            current_user = get_current_user()
            validated_data['employee'] = current_user
        
        return validated_data
        

class DailyUpdateViewSet(ModelViewSet):
    queryset = DailyUpdate.objects.all()
    serializer_class = DailyUpdateSerializer
