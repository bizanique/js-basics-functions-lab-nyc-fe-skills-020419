// Code your solution in this file!
const headquatersBlock = 42

function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquatersBlock)
}

function distanceFromHqInFeet(block) { return distanceFromHqInBlocks(block) * feetPerBlock
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs((block1 * feetPerBlock) - (blocks2 * feetPerBlock))