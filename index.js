// Code your solution in this file!
const headquatersBlock = 42

function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquatersBlock)
}

function distanceFromHqInFeet(block) { return distanceFromHqInBlocks(block) * feetPerBlock
}