const projects = [
  {
    slug: 'sms-whiskey-cabinet', title: '“SMS” Whiskey Cabinet', category: 'storage', label: 'Storage & display', materials: 'Walnut, maple inlay & brass',
    images: ['images/sms-whiskey-cabinet1.jpg', 'images/sms-whiskey-cabinet2.jpg'],
    description: 'This piece is the physical epitome of my research and a gift of gratitude for my advisor. Its geometric form follows the solution path of our novel Shifted Maximum Subarray (SMS) algorithm, bringing personal research into the physical language of the cabinet.',
    captions: ['A cabinet shaped by the solution path of the SMS algorithm.', 'Maple inlay and brass details reward a closer look.']
  },
  {
    slug: 'tantalus-whiskey-cabinet', title: '“Tantalus” Whiskey Cabinet', category: 'storage', label: 'Storage & display', materials: 'Walnut & solid brass hinges',
    images: ['images/tantalus-whiskey-cabinet1.jpg', 'images/tantalus-whiskey-cabinet2.jpeg', 'images/tantalus-whiskey-cabinet3.jpeg', 'images/tantalus-whiskey-cabinet4.jpeg', 'images/tantalus-whiskey-cabinet5.jpeg'],
    description: 'The hand-cut dovetail joints speak to the time and care that went into every corner, while the cove-cut front adds depth and texture that feels just right in hand. Solid brass hinges finish a lasting home for good whiskey and even better moments.',
    captions: ['“Tantalus” whiskey cabinet in walnut.', 'A cove-cut front adds depth and texture.', 'Hand-cut dovetails at the case corner.', 'Solid brass hardware for a subtle shine.', 'Made to hold a well-earned pour.']
  },
  {
    slug: 'round-whiskey-cabinet', title: 'Round Whiskey Cabinet', category: 'storage', label: 'Storage & display', materials: 'Hardwood & brass',
    images: ['images/round-whisky-cabinet1.jpeg', 'images/round-whisky-cabinet2.jpeg', 'images/round-whisky-cabinet3.jpeg', 'images/round-whisky-cabinet4.jpeg'],
    description: 'A compact cabinet that gives the ritual of a good drink its own considered place. Rounded proportions soften the form while the interior is designed for easy, everyday use.',
    captions: ['A rounded cabinet with a quiet presence.', 'The curved profile from the side.', 'A close look at the cabinet’s joinery and finish.', 'Built to make an evening ritual feel special.']
  },
  {
    slug: 'serenity-coffee-table', title: '“Serenity” Coffee Table', category: 'furniture', label: 'Furniture', materials: 'Solid 8/4 walnut, hard wax oil',
    images: ['images/serenity-coffee-table1.jpeg', 'images/serenity-coffee-table2.jpeg', 'images/serenity-coffee-table3.jpeg'],
    description: 'A commission that began with a client’s preferred style and table legs, then became a lesson in translating ideas into a practical, balanced design. The finished table is solid 8/4 walnut, finished in hard wax oil, and measures 48 × 20 inches.',
    captions: ['“Serenity” coffee table in solid walnut.', 'A warm, restrained focal point for the living room.', 'The finished 48 × 20 inch commission.']
  },
  {
    slug: 'coffee-table', title: 'Coffee Table', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/coffe-table-1.JPG', 'images/coffee-table-2.JPG', 'images/coffee-table-3.JPG'],
    description: 'A low, functional table made to bring warmth and a quiet focal point to the room. The details are kept simple so the grain and proportion can do the talking.',
    captions: ['A handmade coffee table at home in the living room.', 'Low, useful proportions for daily life.', 'A detail of the table’s clean form.']
  },
  {
    slug: 'entryway-table', title: 'Entryway Table', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/entry-way-table1.jpeg', 'images/entry-way-table2.jpeg', 'images/entry-way-table3.jpeg', 'images/entry-way-table4.jpeg'],
    description: 'A custom entryway piece for the small rituals of arriving home—somewhere to set down keys, pause, and start again.',
    captions: ['A welcoming first impression.', 'Designed for the daily rhythm of coming home.', 'A close look at the wood grain and form.', 'A functional surface without taking over the room.']
  },
  {
    slug: 'desk', title: 'Desk', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/desk-1.jpeg'],
    description: 'A dedicated workspace made with durable materials and an emphasis on calm, everyday use.',
    captions: ['A grounded workspace built for focused days.']
  },
  {
    slug: 'bookshelf', title: 'Bookshelf', category: 'storage', label: 'Storage & display', materials: 'Solid wood',
    images: ['images/index-shelf1.JPG', 'images/index-shelf2.JPG', 'images/index-shelf3.JPG', 'images/index-shelf4.JPG'],
    description: 'A bookshelf made to give books, records, and everyday objects a considered home. Open shelving keeps the composition light while making room for a life in progress.',
    captions: ['A bookshelf for books, records, and found objects.', 'Open shelves keep the piece visually light.', 'Built storage that becomes part of the room.', 'A closer view of the shelves and materials.']
  },
  {
    slug: 'oakton-shoe-rack', title: '“Oakton” Shoe Rack', category: 'furniture', label: 'Furniture', materials: 'Hardwood with live edge & sapwood',
    images: ['images/oakton-shoerack1.jpeg', 'images/oakton-shoerack2.jpeg', 'images/oakton-shoerack3.jpeg'],
    description: 'My first project after moving to Northern Virginia, made because a new home calls for useful furniture. Inspired by the work of @encurtis, it pairs dovetails on a curve with an intentional live edge and sapwood color variation.',
    captions: ['“Oakton” shoe rack, made for a new home.', 'Curved dovetails are tucked into the structure.', 'The bench top’s natural color variation is part of the design.']
  },
  {
    slug: '0731-tennis-racket-holder', title: '“0731” Tennis Racket Holder', category: 'storage', label: 'Storage & display', materials: 'Hardwood & custom brass pins',
    images: ['images/0731-tennis-rack1.jpeg', 'images/0731-tennis-rack2.jpeg', 'images/0731-tennis-rack3.jpeg', 'images/0731-tennis-rack4.jpeg', 'images/0731-tennis-rack5.jpeg'],
    description: 'Built as a 30th-birthday gift for a friend in another state, this rack had to ship flat: zero glue, zero fasteners, just joinery. Inspired by cable-stayed bridges in our hometown, mortise-and-tenon joints are held together by tension and finished with custom brass pins.',
    captions: ['“0731” tennis racket holder, named for our hometown area code.', 'A flat-pack design held together by pure joinery.', 'Mortise-and-tenon joints are locked by tension.', 'Custom brass pins secure the crossbar.', 'A gift and a nod to a lifelong friendship.']
  },
  {
    slug: 'cutting-boards', title: 'Cutting Boards', category: 'objects', label: 'Small objects', materials: 'Hardwood',
    images: ['images/cutting-board-1.jpeg', 'images/cutting-board-2.jpeg', 'images/cutting-board-3.jpeg', 'images/cutting-board-4.jpeg', 'images/cutting-board-5.JPG', 'images/cutting-board-6.jpeg', 'images/cutting-board-7.jpeg'],
    description: 'Handmade hardwood cutting boards built for daily use in the kitchen. Each one celebrates grain, color, and a surface that gets better with a little life on it.',
    captions: ['Handmade hardwood for the everyday kitchen.', 'A study in grain and color.', 'Made for chopping, serving, and keeping close at hand.', 'Durable material with a warm feel.', 'A board made to be used.', 'Simple details, solid construction.', 'A functional object with its own character.']
  },
  {
    slug: 'hades-jewelry-box', title: '“Hades” Jewelry Box', category: 'objects', label: 'Small objects', materials: 'Curly walnut & shop-made lamination',
    images: ['images/hades-box1.jpeg', 'images/hades-box2.jpeg', 'images/hades-box3.jpeg', 'images/hades-box4.jpeg'],
    description: 'One of my favorite boxes, featuring a coopered door and shop-made lamination. The curly walnut is the undeniable highlight: its chatoyance—the razzle-dazzle—makes the piece catch the eye from every angle.',
    captions: ['“Hades” jewelry box in curly walnut.', 'A coopered door shapes the front.', 'The wood’s chatoyance shifts with the light.', 'Shop-made lamination brings the form together.']
  },
  {
    slug: 'jewelry-box', title: 'Jewelry Box', category: 'objects', label: 'Small objects', materials: 'Solid wood',
    images: ['images/jewelry-box-1.JPG', 'images/jewelry-box-2.JPG', 'images/jewelry-box-3.jpg', 'images/jewelry-box-4.JPG', 'images/jewelry-box-5.JPG', 'images/jewelry-box-6.JPG', 'images/jewelry-box-7.JPG'],
    description: 'A series of keepsake boxes made with small-scale joinery, careful proportions, and room for the objects that matter most. Each box is meant to feel as considered in the hand as it looks on a shelf.',
    captions: ['A keepsake box made to be opened often.', 'Small-scale joinery and quiet proportions.', 'A detail of the box’s fitted construction.', 'Built to give treasured objects a home.', 'The grain is allowed to lead the design.', 'A useful object made with patience.', 'A lasting place for small things.']
  },
  {
    slug: 'sonoran-tissue-box', title: '“Sonoran” Tissue Box', category: 'objects', label: 'Small objects', materials: 'Walnut, quarter-sawn white oak & handmade tile',
    images: ['images/sonoran-tissue-box1.jpeg', 'images/sonoran-tissue-box2.jpeg', 'images/sonoran-tissue-box3.jpeg', 'images/sonoran-tissue-box4.jpeg', 'images/sonoran-tissue-box5.jpeg', 'images/sonoran-tissue-box6.jpeg'],
    description: 'A collaboration with @wendy.hilli, inspired by Arizona. The walnut carcass uses half-blind dovetails and the lid is quarter-sawn white oak; handmade tiles carry cactus and flower imprints. It is a small object built to hold a much larger story.',
    captions: ['“Sonoran” tissue box, a collaboration inspired by Arizona.', 'Walnut carcass with half-blind dovetails.', 'A quarter-sawn white-oak lid.', 'Handmade tile carries cactus impressions.', 'Flower motifs make each side tell a story.', 'A small, singular object made to be kept.']
  },
  {
    slug: 'mushroom-side-table', title: 'Mushroom Side Table', category: 'furniture', label: 'Furniture', materials: 'Oak with a hint of walnut',
    images: ['images/mushroom-side-table1.jpeg', 'images/mushroom-side-table2.jpeg', 'images/mushroom-side-table3.jpeg'],
    description: 'The final project of a summer at NovaLabs, and part of an ongoing series of end tables exploring new design ideas and joinery. Its form is inspired by mushrooms—one of my favorite foods—and remains a prototype with plenty of room to evolve.',
    captions: ['A mushroom-inspired side table in oak and walnut.', 'A prototype exploring balance and leg joinery.', 'A side view of the sculptural profile.']
  },
  {
    slug: 'nova-end-table', title: '“Nova” End Table', category: 'furniture', label: 'Furniture', materials: '8/4 ash, dark tint',
    images: ['images/nova-side-table1.jpeg', 'images/nova-side-table2.jpeg', 'images/nova-side-table3.jpeg'],
    description: 'Inspired by the client’s rounded dining table and its pronounced round-over profile. The dark tint contrasts with the dining table while complementing the lighter tone of the couch.',
    captions: ['“Nova” end table in 8/4 ash.', 'Rounded edges echo the client’s dining table.', 'The dark finish balances the light surrounding room.']
  },
  {
    slug: 'kachina-tree-end-table', title: '“Kachina Tree” End Table', category: 'furniture', label: 'Furniture', materials: 'Oak, India ink & hard wax oil',
    images: ['images/kachina-tree-end-table1.jpeg', 'images/kachina-tree-end-table2.jpeg', 'images/kachina-tree-end-table3.jpeg', 'images/hoodoos.jpeg'],
    description: 'Inspired by Sedona’s lesser-known Kachina Tree Cave, where a certain angle reveals a tree framed inside a cave. The legs invite the same search for perspective at home, while complementary curves in the top and base echo the way the tree and cave complete one another.',
    captions: ['“Kachina Tree” end table, viewed through its sculptural legs.', 'Complementary curves connect the top and base.', 'A different angle reveals a new composition.', 'The Sedona landscape that started the idea.']
  }
];
