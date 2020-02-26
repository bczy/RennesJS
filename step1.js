var CubeControl = pc.createScript('cubeControl')
console.log(pc.KEY_LEFT)
CubeControl.attributes.add('speed', { type: 'number', default: 10 })

// update code called every frame
CubeControl.prototype.update = function (dt) {
  if (this.app.keyboard.isPressed(pc.KEY_LEFT)) {
    this.entity.translate(new pc.Vec3(-this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
    this.entity.translate(new pc.Vec3(this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_UP)) {
    this.entity.translate(new pc.Vec3(0, 0, -this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_DOWN)) {
    this.entity.translate(new pc.Vec3(0, 0, this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_SPACE)) {
    this.entity.rigidbody.applyImpulse(0, 1.8, 0, 0, 0, 0)
  }
}
