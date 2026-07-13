// Mystic Tales RPG - Waystones progression
ServerEvents.recipes(event => {
  const remove = [
    'waystones:waystone',
    'waystones:warp_plate',
    'waystones:warp_scroll',
    'waystones:return_scroll',
    'waystones:bound_scroll'
  ];

  remove.forEach(id => event.remove({id}));

  // Custom recipes will be added in the next patch.
});
