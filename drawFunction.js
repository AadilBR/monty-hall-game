const draw = (gates) => {
  console.log(`
      ##            ##            ##
    ######        ######        ######
  ##########    ##########    ##########
  ##########    ##########    ##########
  ##########    ##########    ##########
  ##${gates[0].display}##    ##${gates[1].display}##    ##${gates[2].display}##
  ##########    ##########    ##########
  ##########    ##########    ##########
     [1]           [2]           [3]`)
}


exports.draw = draw