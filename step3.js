/*jshint esversion: 6 */

const CubeControl = pc.createScript('cubeControl')

CubeControl.onFloor = false

CubeControl.attributes.add('speed', { type: 'number', default: 10 })
CubeControl.attributes.add('jumpImpulse', { type: 'number', default: 2 })

CubeControl.prototype.initialize = function () {
  this.entity.collision.on('collisionstart', this.onCollisionStart, this)
  this.entity.collision.on('collisionend', this.onCollisionEnd, this)
}

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
  if (this.app.keyboard.isPressed(pc.KEY_SPACE) && this.onFloor) {
    this.entity.rigidbody.applyImpulse(0, this.jumpImpulse, 0, 0, 0, 0)
  }
}

CubeControl.prototype.onCollisionStart = function () {
  this.entity.model.meshInstances[0].material.diffuse.set(1, 1, 0)
  this.entity.model.meshInstances[0].material.update()
  CubeControl.prototype.onFloor = true
}
CubeControl.prototype.onCollisionEnd = function () {
  this.entity.model.meshInstances[0].material.diffuse.set(1, 0, Math.random())
  this.entity.model.meshInstances[0].material.update()
  CubeControl.prototype.onFloor = false
}
