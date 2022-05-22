const productsToAdd = [
  {
    name: 'interdum.',
    description: 'amet nulla. Donec non justo. Proin non massa non ante',
    stock: 11,
    price: 494,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'mi.',
    description: 'sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo.',
    stock: 5,
    price: 383,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'tempor',
    description: 'amet nulla. Donec non justo. Proin non massa non ante',
    stock: 23,
    price: 118,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'eget',
    description: 'urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim.',
    stock: 5,
    price: 303,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'in',
    description: 'quam. Pellentesque habitant morbi tristique senectus et netus et malesuada',
    stock: 6,
    price: 477,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'scelerisque',
    description: 'quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus',
    stock: 0,
    price: 53,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'ac',
    description: 'ante dictum mi, ac mattis velit justo nec ante. Maecenas',
    stock: 11,
    price: 216,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'sed',
    description: 'libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet',
    stock: 20,
    price: 241,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'gravida',
    description: 'sit amet, risus. Donec nibh enim, gravida sit amet, dapibus',
    stock: 10,
    price: 433,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'metus',
    description: 'metus. In nec orci. Donec nibh. Quisque nonummy ipsum non',
    stock: 28,
    price: 318,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'scelerisque',
    description: 'ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et,',
    stock: 12,
    price: 161,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'ad',
    description: 'malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit.',
    stock: 18,
    price: 12,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'convallis,',
    description: 'amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis',
    stock: 25,
    price: 410,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'ultrices,',
    description: 'blandit at, nisi. Cum sociis natoque penatibus et magnis dis',
    stock: 28,
    price: 455,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'sed',
    description: 'a, auctor non, feugiat nec, diam. Duis mi enim, condimentum',
    stock: 30,
    price: 482,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'diam.',
    description: 'penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean',
    stock: 9,
    price: 119,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'at',
    description: 'Aenean gravida nunc sed pede. Cum sociis natoque penatibus et',
    stock: 25,
    price: 147,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'ligula.',
    description: 'magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu',
    stock: 26,
    price: 323,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'tincidunt',
    description: 'ornare tortor at risus. Nunc ac sem ut dolor dapibus',
    stock: 27,
    price: 7,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'dui.',
    description: 'pede et risus. Quisque libero lacus, varius et, euismod et,',
    stock: 14,
    price: 196,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'turpis.',
    description: 'nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod',
    stock: 15,
    price: 437,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'rutrum',
    description: 'massa non ante bibendum ullamcorper. Duis cursus, diam at pretium',
    stock: 24,
    price: 401,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'nec',
    description: 'dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc',
    stock: 14,
    price: 110,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'convallis,',
    description: 'sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut',
    stock: 4,
    price: 118,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'vel,',
    description: 'eget varius ultrices, mauris ipsum porta elit, a feugiat tellus',
    stock: 15,
    price: 123,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'varius',
    description: 'dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl.',
    stock: 1,
    price: 290,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'erat.',
    description: 'luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget,',
    stock: 22,
    price: 73,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'sodales',
    description: 'Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris,',
    stock: 11,
    price: 48,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'interdum',
    description: 'lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam',
    stock: 29,
    price: 354,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'Integer',
    description: 'egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie',
    stock: 6,
    price: 218,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'Fusce',
    description: 'adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc',
    stock: 28,
    price: 40,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'metus',
    description: 'ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper',
    stock: 24,
    price: 345,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'Mauris',
    description: 'dui, in sodales elit erat vitae risus. Duis a mi',
    stock: 23,
    price: 378,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'at',
    description: 'placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante,',
    stock: 11,
    price: 448,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'convallis,',
    description: 'cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis',
    stock: 20,
    price: 418,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'massa.',
    description: 'purus, in molestie tortor nibh sit amet orci. Ut sagittis',
    stock: 25,
    price: 293,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'tempor',
    description: 'consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus',
    stock: 6,
    price: 78,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'Aliquam',
    description: 'a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed',
    stock: 4,
    price: 387,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'mauris',
    description: 'scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia.',
    stock: 9,
    price: 39,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'egestas',
    description: 'montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc',
    stock: 10,
    price: 70,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'sodales',
    description: 'id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend',
    stock: 14,
    price: 139,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'placerat',
    description: 'elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec',
    stock: 12,
    price: 12,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'luctus',
    description: 'fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor,',
    stock: 6,
    price: 109,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'tincidunt',
    description: 'Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra.',
    stock: 14,
    price: 443,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'Phasellus',
    description: 'sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor',
    stock: 5,
    price: 76,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'tincidunt.',
    description: 'Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui',
    stock: 1,
    price: 219,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'pharetra.',
    description: 'eu, odio. Phasellus at augue id ante dictum cursus. Nunc',
    stock: 15,
    price: 142,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'Nullam',
    description: 'nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam',
    stock: 25,
    price: 409,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'mauris',
    description: 'sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis',
    stock: 26,
    price: 100,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'erat.',
    description: 'vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor',
    stock: 3,
    price: 472,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'in,',
    description: 'lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi.',
    stock: 14,
    price: 419,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'eu',
    description: 'cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam',
    stock: 1,
    price: 118,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'libero',
    description: 'enim non nisi. Aenean eget metus. In nec orci. Donec',
    stock: 25,
    price: 420,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'ac',
    description: 'sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus',
    stock: 0,
    price: 83,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'hendrerit',
    description: 'aptent taciti sociosqu ad litora torquent per conubia nostra, per',
    stock: 15,
    price: 460,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'Vivamus',
    description: 'purus, in molestie tortor nibh sit amet orci. Ut sagittis',
    stock: 7,
    price: 47,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'sagittis',
    description: 'Nam interdum enim non nisi. Aenean eget metus. In nec',
    stock: 1,
    price: 293,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'in,',
    description: 'a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris',
    stock: 18,
    price: 278,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'nulla',
    description: 'sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet',
    stock: 26,
    price: 350,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'scelerisque',
    description: 'at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada',
    stock: 27,
    price: 241,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'amet',
    description: 'ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate,',
    stock: 21,
    price: 178,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'quam',
    description: 'nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae',
    stock: 2,
    price: 318,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'ornare,',
    description: 'Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus',
    stock: 15,
    price: 368,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'eu,',
    description: 'justo eu arcu. Morbi sit amet massa. Quisque porttitor eros',
    stock: 10,
    price: 298,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'amet',
    description: 'ultrices sit amet, risus. Donec nibh enim, gravida sit amet,',
    stock: 20,
    price: 355,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'dictum',
    description: 'dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate',
    stock: 29,
    price: 376,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'eros',
    description: 'Donec est mauris, rhoncus id, mollis nec, cursus a, enim.',
    stock: 1,
    price: 241,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'nonummy',
    description: 'dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel,',
    stock: 20,
    price: 158,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'Donec',
    description: 'lorem vitae odio sagittis semper. Nam tempor diam dictum sapien.',
    stock: 14,
    price: 362,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'cursus,',
    description: 'nunc ac mattis ornare, lectus ante dictum mi, ac mattis',
    stock: 22,
    price: 368,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'ornare.',
    description: 'Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie',
    stock: 21,
    price: 340,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'Donec',
    description: 'malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris',
    stock: 25,
    price: 241,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'elementum',
    description: 'pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu',
    stock: 15,
    price: 260,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'nunc',
    description: 'et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat,',
    stock: 8,
    price: 285,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'lobortis',
    description: 'Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus',
    stock: 18,
    price: 329,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'Quisque',
    description: 'arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing.',
    stock: 18,
    price: 221,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'vitae',
    description: 'adipiscing, enim mi tempor lorem, eget mollis lectus pede et',
    stock: 14,
    price: 261,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'nec',
    description: 'velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus.',
    stock: 4,
    price: 492,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'felis.',
    description: 'eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum',
    stock: 6,
    price: 405,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'magnis',
    description: 'Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate,',
    stock: 10,
    price: 43,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'mauris',
    description: 'quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar',
    stock: 12,
    price: 417,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'mollis',
    description: 'orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras',
    stock: 27,
    price: 28,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'Sed',
    description: 'enim. Nunc ut erat. Sed nunc est, mollis non, cursus',
    stock: 14,
    price: 488,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'odio',
    description: 'non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh.',
    stock: 29,
    price: 35,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'metus',
    description: 'Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id,',
    stock: 4,
    price: 129,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'nibh.',
    description: 'non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh.',
    stock: 3,
    price: 257,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'dictum',
    description: 'nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor',
    stock: 5,
    price: 415,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'amet,',
    description: 'sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue',
    stock: 13,
    price: 290,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'Donec',
    description: 'ac turpis egestas. Fusce aliquet magna a neque. Nullam ut',
    stock: 27,
    price: 403,
    reviewStars: 4,
    category: 'beds'
  },
  {
    name: 'Integer',
    description: 'Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo',
    stock: 23,
    price: 417,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'ligula.',
    description: 'ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero',
    stock: 5,
    price: 46,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'interdum',
    description: 'felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem,',
    stock: 21,
    price: 170,
    reviewStars: 5,
    category: 'beds'
  },
  {
    name: 'hendrerit',
    description: 'torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam',
    stock: 20,
    price: 85,
    reviewStars: 3,
    category: 'beds'
  },
  {
    name: 'sem',
    description: 'placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna',
    stock: 30,
    price: 43,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'a,',
    description: 'neque non quam. Pellentesque habitant morbi tristique senectus et netus',
    stock: 23,
    price: 200,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'sollicitudin',
    description: 'Donec nibh enim, gravida sit amet, dapibus id, blandit at,',
    stock: 9,
    price: 283,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'aliquet.',
    description: 'ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,',
    stock: 2,
    price: 32,
    reviewStars: 0,
    category: 'beds'
  },
  {
    name: 'eget',
    description: 'dui, in sodales elit erat vitae risus. Duis a mi',
    stock: 12,
    price: 49,
    reviewStars: 2,
    category: 'beds'
  },
  {
    name: 'libero',
    description: 'sit amet, faucibus ut, nulla. Cras eu tellus eu augue',
    stock: 19,
    price: 403,
    reviewStars: 1,
    category: 'beds'
  },
  {
    name: 'dictum',
    description: 'Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc',
    stock: 23,
    price: 336,
    reviewStars: 5,
    category: 'beds'
  }
]

const ordersToCreate = [
  {
    firstname: 'Lee',
    lastname: 'Shannon',
    email: 'ipsum.porta.elit@protonmail.ca',
    street: 'Ap #677-2045 Dictum. Ave',
    city: 'Murcia',
    zipcode: '542538',
    country: 'Vietnam',
    phone: '(378) 713-2327',
    price: 113,
    role: 'inProgress',
    userId: 10
  },
  {
    firstname: 'Kelsey',
    lastname: 'Willis',
    email: 'mauris.vel.turpis@protonmail.org',
    street: 'P.O. Box 869, 5322 Duis Avenue',
    city: 'Sungei Kadut',
    zipcode: '81175',
    country: 'South Korea',
    phone: '1-886-415-3523',
    price: 198,
    role: 'purchaised',
    userId: 3
  },
  {
    firstname: 'Julian',
    lastname: 'James',
    email: 'vel.arcu.eu@hotmail.edu',
    street: '548 Iaculis Rd.',
    city: 'Kapolei',
    zipcode: '967988',
    country: 'Sweden',
    phone: '(259) 814-1832',
    price: 39,
    role: 'purchaised',
    userId: 14
  },
  {
    firstname: 'Vielka',
    lastname: 'Mitchell',
    email: 'eleifend.non.dapibus@aol.com',
    street: '8505 Enim Rd.',
    city: 'Nizip',
    zipcode: '8572',
    country: 'China',
    phone: '1-343-573-5247',
    price: 412,
    role: 'purchaised',
    userId: 4
  },
  {
    firstname: 'Galvin',
    lastname: 'Walter',
    email: 'sed@protonmail.couk',
    street: '6871 Pede. Rd.',
    city: 'Haren',
    zipcode: '920136',
    country: 'Peru',
    phone: '(844) 855-3575',
    price: 10,
    role: 'purchaised',
    userId: 4
  },
  {
    firstname: 'Thomas',
    lastname: 'Gutierrez',
    email: 'malesuada@yahoo.couk',
    street: '9700 Nunc St.',
    city: 'Los Vilos',
    zipcode: '292744',
    country: 'Austria',
    phone: '(330) 461-6184',
    price: 447,
    role: 'inProgress',
    userId: 6
  },
  {
    firstname: 'Cadman',
    lastname: 'Morrison',
    email: 'dolor.donec.fringilla@yahoo.org',
    street: '284 Vel, Street',
    city: 'Aparecida de Goiânia',
    zipcode: '24017',
    country: 'Spain',
    phone: '(945) 751-2560',
    price: 262,
    role: 'inProgress',
    userId: 12
  },
  {
    firstname: 'Chastity',
    lastname: 'Howe',
    email: 'eget.ipsum@aol.com',
    street: '582 Lacus Rd.',
    city: 'Chancay',
    zipcode: '31862',
    country: 'Belgium',
    phone: '(977) 545-5035',
    price: 19,
    role: 'purchaised',
    userId: 6
  },
  {
    firstname: 'Thane',
    lastname: 'Mays',
    email: 'ornare.placerat@yahoo.couk',
    street: 'P.O. Box 766, 8262 Eu Av.',
    city: 'Port Nolloth',
    zipcode: '12266',
    country: 'Vietnam',
    phone: '(864) 486-1513',
    price: 92,
    role: 'purchaised',
    userId: 4
  },
  {
    firstname: 'Paula',
    lastname: 'Ross',
    email: 'lorem.ipsum@google.com',
    street: '6351 Luctus St.',
    city: 'Guizhou',
    zipcode: '88262',
    country: 'Spain',
    phone: '(368) 112-2658',
    price: 496,
    role: 'inProgress',
    userId: 3
  },
  {
    firstname: 'Jackson',
    lastname: 'Hudson',
    email: 'pede.malesuada.vel@outlook.edu',
    street: '551-2290 Varius. Avenue',
    city: 'Seloignes',
    zipcode: '225398',
    country: 'United States',
    phone: '(355) 719-7074',
    price: 254,
    role: 'purchaised',
    userId: 10
  },
  {
    firstname: 'Halla',
    lastname: 'Joyce',
    email: 'at.pede@hotmail.org',
    street: '611-9564 Vestibulum Avenue',
    city: 'Sokoto',
    zipcode: '549374',
    country: 'Sweden',
    phone: '1-678-478-2363',
    price: 250,
    role: 'inProgress',
    userId: 7
  },
  {
    firstname: 'Quail',
    lastname: 'May',
    email: 'nam@yahoo.couk',
    street: '336-5191 Ante St.',
    city: 'General Santos',
    zipcode: '887264',
    country: 'Belgium',
    phone: '(746) 365-6148',
    price: 455,
    role: 'inProgress',
    userId: 15
  },
  {
    firstname: 'Cheryl',
    lastname: 'Gordon',
    email: 'lobortis.mauris.suspendisse@aol.net',
    street: 'P.O. Box 881, 7575 Diam St.',
    city: 'Dubno',
    zipcode: '15521',
    country: 'Canada',
    phone: '(777) 423-1597',
    price: 8,
    role: 'purchaised',
    userId: 0
  },
  {
    firstname: 'Ulla',
    lastname: 'Colon',
    email: 'rhoncus.id.mollis@outlook.edu',
    street: '825-5678 Volutpat. Street',
    city: 'Emalahleni',
    zipcode: '45135',
    country: 'Nigeria',
    phone: '1-280-992-5537',
    price: 462,
    role: 'inProgress',
    userId: 10
  },
  {
    firstname: 'Selma',
    lastname: 'Barron',
    email: 'consectetuer.adipiscing.elit@aol.edu',
    street: '950-9572 Sit Street',
    city: 'Kirkintilloch',
    zipcode: '02541',
    country: 'Brazil',
    phone: '1-964-345-1420',
    price: 424,
    role: 'inProgress',
    userId: 2
  },
  {
    firstname: 'Camilla',
    lastname: 'Cantu',
    email: 'vulputate@protonmail.edu',
    street: 'Ap #701-679 Eget, Rd.',
    city: 'Recife',
    zipcode: '22618',
    country: 'Canada',
    phone: '(861) 484-3844',
    price: 14,
    role: 'purchaised',
    userId: 7
  },
  {
    firstname: 'Nash',
    lastname: 'Torres',
    email: 'egestas.hendrerit@yahoo.couk',
    street: '233-9628 Ipsum. Street',
    city: 'Monfumo',
    zipcode: '31183',
    country: 'China',
    phone: '1-442-311-6831',
    price: 408,
    role: 'inProgress',
    userId: 10
  },
  {
    firstname: 'Merritt',
    lastname: 'Acevedo',
    email: 'tincidunt@icloud.ca',
    street: '681-3680 Mauris Av.',
    city: 'Liaoning',
    zipcode: '6155-9518',
    country: 'Russian Federation',
    phone: '1-354-477-4566',
    price: 491,
    role: 'purchaised',
    userId: 19
  },
  {
    firstname: 'Aristotle',
    lastname: 'Hickman',
    email: 'non.egestas@hotmail.edu',
    street: '835-8352 Odio. Av.',
    city: 'Newton',
    zipcode: '5424 YG',
    country: 'Vietnam',
    phone: '1-889-569-3426',
    price: 83,
    role: 'inProgress',
    userId: 0
  },
  {
    firstname: 'Clark',
    lastname: 'Fernandez',
    email: 'magna.nam@yahoo.couk',
    street: 'Ap #136-206 Donec Road',
    city: 'Iloilo City',
    zipcode: '5347',
    country: 'Peru',
    phone: '(775) 308-2306',
    price: 218,
    role: 'purchaised',
    userId: 5
  },
  {
    firstname: 'Walter',
    lastname: 'Gould',
    email: 'diam.luctus@yahoo.com',
    street: '163-8937 Lacus. Av.',
    city: 'Belfast',
    zipcode: '447595',
    country: 'Canada',
    phone: '1-408-781-1284',
    price: 69,
    role: 'purchaised',
    userId: 2
  },
  {
    firstname: 'Susan',
    lastname: 'Dale',
    email: 'sed.pede@icloud.org',
    street: 'Ap #393-2879 Non, Street',
    city: 'Ipiales',
    zipcode: '36302',
    country: 'Netherlands',
    phone: '1-790-617-3665',
    price: 266,
    role: 'inProgress',
    userId: 20
  },
  {
    firstname: 'Flynn',
    lastname: 'Randall',
    email: 'a.scelerisque@outlook.couk',
    street: 'P.O. Box 742, 3180 Diam St.',
    city: 'Calapan',
    zipcode: '7764',
    country: 'Germany',
    phone: '(223) 242-2793',
    price: 226,
    role: 'inProgress',
    userId: 12
  },
  {
    firstname: 'Finn',
    lastname: 'Donovan',
    email: 'metus@google.ca',
    street: '752-1109 Lacus. Road',
    city: 'Lleida',
    zipcode: '735650',
    country: 'Belgium',
    phone: '(782) 303-3521',
    price: 27,
    role: 'purchaised',
    userId: 3
  },
  {
    firstname: 'Harriet',
    lastname: 'Combs',
    email: 'luctus@hotmail.edu',
    street: '557-9080 Morbi Av.',
    city: 'Tarnów',
    zipcode: '024293',
    country: 'Vietnam',
    phone: '1-425-705-4448',
    price: 181,
    role: 'purchaised',
    userId: 17
  },
  {
    firstname: 'Jerome',
    lastname: 'Harris',
    email: 'interdum.ligula@hotmail.ca',
    street: '977-6275 Lacus Rd.',
    city: 'Bo‘lhe',
    zipcode: '4557 XL',
    country: 'Sweden',
    phone: '(589) 481-7642',
    price: 480,
    role: 'inProgress',
    userId: 20
  },
  {
    firstname: 'Melyssa',
    lastname: 'Ferrell',
    email: 'suspendisse.dui.fusce@outlook.net',
    street: 'Ap #820-6049 Semper Road',
    city: 'Jhang',
    zipcode: '82803',
    country: 'Netherlands',
    phone: '(552) 631-1771',
    price: 271,
    role: 'inProgress',
    userId: 20
  },
  {
    firstname: 'Conan',
    lastname: 'Burris',
    email: 'donec.tincidunt.donec@icloud.org',
    street: 'Ap #226-9492 Nunc Rd.',
    city: 'Skövde',
    zipcode: '97431',
    country: 'Italy',
    phone: '1-876-692-3470',
    price: 278,
    role: 'inProgress',
    userId: 18
  },
  {
    firstname: 'Clio',
    lastname: 'Cox',
    email: 'aliquam.vulputate@aol.edu',
    street: '356-6178 Ac Rd.',
    city: 'Darbhanga',
    zipcode: '157210',
    country: 'Costa Rica',
    phone: '1-576-774-5204',
    price: 161,
    role: 'inProgress',
    userId: 19
  },
  {
    firstname: 'Shea',
    lastname: 'Spears',
    email: 'morbi.tristique.senectus@google.couk',
    street: '467-6965 Interdum Avenue',
    city: 'Rodgau',
    zipcode: '78804-67150',
    country: 'Australia',
    phone: '(693) 481-8573',
    price: 131,
    role: 'purchaised',
    userId: 20
  }
]

// // const cartToCreate = [
// //   {
    
// //     productId: product1.id,
// //     ordersId: order1.id,
// //     price: 30,
// //     quantity: 5,
// //   },
  
// // ];

const usersToCreate = [
  {
    username: "Ramses",
    password: "ramses1!",
    email: "ramses@gmail.com",
    firstname: "Ramses",
    lastname: "Angles",
    role: "admin",
  },
  {
    username: "HPS76LC",
    email: "morbi.tristique.senectus@google.couk",
    password: "JIS22JDU0VX",
    firstname: "Shea",
    lastname: "Spears",
    role: "user",
  },
  {
    username: "IUB22IP",
    email: "aliquam.vulputate@aol.edu",
    password: "MEB53FOU6PR",
    firstname: "Clio",
    lastname: "Cox",
    role: "user",
  },
  {
    username: "TOF38MY",
    email: "donec@icloud.org",
    password: "IFQ77QTI0BR",
    firstname: "Conan",
    lastname: "Burris",
    role: "admin",
  },
  {
    username: "EPJ35JN",
    email: "arcu@yahoo.net",
    password: "XYG71QYZ8IH",
    firstname: "Vernon",
    lastname: "Kidd",
    role: "admin",
  },
  {
    username: "KNL86FH",
    email: "pellentesque@aol.org",
    password: "CXS18BTJ8BF",
    firstname: "Kato",
    lastname: "Black",
    role: "admin",
  },
  {
    username: "XBY77WQ",
    email: "enim.sit@icloud.com",
    password: "JUG94FVJ9DV",
    firstname: "Cassandra",
    lastname: "Keith",
    role: "user",
  },
  {
    username: "EXU91HW",
    email: "purus@outlook.net",
    password: "DOX63WRV4OY",
    firstname: "Nero",
    lastname: "Morales",
    role: "admin",
  },
  {
    username: "XEZ38EF",
    email: "luctus.et@hotmail.ca",
    password: "SKB63JZI5BH",
    firstname: "Maryam",
    lastname: "Jimenez",
    role: "admin",
  },
  {
    username: "TBC84DN",
    email: "gravida.mauris@hotmail.net",
    password: "HOR46LHW2PO",
    firstname: "Leigh",
    lastname: "Miranda",
    role: "user",
  },
  {
    username: "ULI30WX",
    email: "elit.nulla@aol.couk",
    password: "VOT64GES0DU",
    firstname: "Amal",
    lastname: "Patrick",
    role: "user",
  },
  {
    username: "HVQ84QT",
    email: "et@aol.com",
    password: "GBL81OWZ1FT",
    firstname: "Cyrus",
    lastname: "Whitehead",
    role: "admin",
  },
  {
    username: "NUF77QX",
    email: "convallis@google.couk",
    password: "BQK38YYH0BB",
    firstname: "Bethany",
    lastname: "Solomon",
    role: "admin",
  },
  {
    username: "JVY17GM",
    email: "mus.donec.dignissim@yahoo.org",
    password: "FSK16GUY8XX",
    firstname: "Rhona",
    lastname: "Estrada",
    role: "admin",
  },
  {
    username: "FQB86XC",
    email: "ultrices.mauris.ipsum@protonmail.couk",
    password: "LGN55OGN9NN",
    firstname: "Erin",
    lastname: "Duffy",
    role: "admin",
  },
  {
    username: "QTX82PK",
    email: "sed.neque@yahoo.edu",
    password: "KDG63BEB6ZB",
    firstname: "Clinton",
    lastname: "Dillard",
    role: "user",
  },
  {
    username: "SJO44OE",
    email: "diam@aol.edu",
    password: "LLP38NCH6BL",
    firstname: "Judah",
    lastname: "Schroeder",
    role: "admin",
  },
  {
    username: "QKP02TJ",
    email: "ornare.fusce@protonmail.ca",
    password: "FHG03IBK3BK",
    firstname: "Solomon",
    lastname: "Bradley",
    role: "user",
  },
  {
    username: "CEG78DE",
    email: "sit.amet@protonmail.couk",
    password: "PJC66OIH8FI",
    firstname: "Justin",
    lastname: "Daniel",
    role: "user",
  },
  {
    username: "QQS69SY",
    email: "non@google.org",
    password: "IWF41GQX7BC",
    firstname: "Chanda",
    lastname: "Oneil",
    role: "admin",
  },
];

module.exports = {
  productsToAdd,
  ordersToCreate,
  usersToCreate,
};
