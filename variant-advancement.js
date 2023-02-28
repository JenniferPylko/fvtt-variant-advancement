Hooks.on("dnd5e.preAdvancementManagerComplete",
({actor}) => {
    const currentXP = actor.system.details.xp.value
    const maxXP = actor.system.details.xp.max
    actor.update({system: {details: {xp: {value: currentXP - maxXP}}}})
})