const testRed = (state: any, {num}: any) => {
  if (num === undefined) {
    num = 0
  } else {
    num ++
  }
  return {
    ...state,
    num
  }
}

export default testRed