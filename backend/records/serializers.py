from rest_framework import serializers
from .models import Record


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Record
        fields = '__all__'
        read_only_fields = ['id', 'created_at', 'updated_at']

    def validate_phone(self, value):
        cleaned = value.replace(' ', '').replace('-', '')
        if not cleaned.isdigit() or len(cleaned) < 10:
            raise serializers.ValidationError('Phone must contain at least 10 digits.')
        return value

    def validate_experience_years(self, value):
        if value < 0:
            raise serializers.ValidationError('Experience cannot be negative.')
        if value > 60:
            raise serializers.ValidationError('Experience looks too high.')
        return value
