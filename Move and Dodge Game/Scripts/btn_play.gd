extends Button

func _ready():
	pass


func _on_btn_play_pressed():
	get_tree().change_scene("res://Level.tscn")
