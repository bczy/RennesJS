/*jshint esversion: 6 */

const CubeControl = pc.createScript('cubeControl')
console.log(pc.KEY_LEFT)
CubeControl.attributes.add('speed', { type: 'number', default: 10 })
CubeControl.attributes.add('jumpImpulse', { type: 'number', default: 0.5 })

// update code called every frame
CubeControl.prototype.update = function (dt) {
  if (this.app.keyboard.isPressed(pc.KEY_LEFT)) {
    this.entity.rigidbody.applyImpulse(new pc.Vec3(-this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
    this.entity.rigidbody.applyImpulse(new pc.Vec3(this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_UP)) {
    this.entity.rigidbody.applyImpulse(new pc.Vec3(0, 0, -this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_DOWN)) {
    this.entity.rigidbody.applyImpulse(new pc.Vec3(0, 0, this.speed * dt))
  }
  if (this.app.keyboard.isPressed(pc.KEY_SPACE)) {
    if (this.entity.getPosition().y < 3.2)
      this.entity.rigidbody.applyImpulse(0, this.jumpImpulse, 0, 0, 0, 0)
  }
}
