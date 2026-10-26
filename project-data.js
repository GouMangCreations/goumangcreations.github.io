const projects = [
  {
    slug: 'index-shelf', title: 'Index Shelf', category: 'storage', label: 'Storage & display', materials: 'Solid wood',
    images: ['images/projects/index-shelf/index-shelf-enh1.jpeg', 'images/projects/index-shelf/index-shelf-enh2.jpeg', 'images/projects/index-shelf/index-shelf-enh3.jpeg', 'images/projects/index-shelf/index-shelf-enh4.jpeg'],
    description: 'A handmade shelf designed to bring order, warmth, and an easy sense of rhythm to the objects it holds.',
    captions: ['A handmade shelf with a quiet, useful presence.', 'A considered place for everyday objects.', 'The structure and grain are allowed to lead.', 'Built storage made for daily life.']
  },
  {
    slug: 'earth-meeting-sky-end-table', title: '“Earth Meeting Sky” End Table', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/projects/earth-meeting-sky-end-table/earth-meeting-sky-end-table-enh1.jpeg', 'images/projects/earth-meeting-sky-end-table/earth-meeting-sky-end-table-enh2.jpeg', 'images/projects/earth-meeting-sky-end-table/earth-meeting-sky-end-table-enh3.jpeg', 'images/projects/earth-meeting-sky-end-table/earth-meeting-sky-end-table-enh4.jpeg', 'images/projects/earth-meeting-sky-end-table/earth-meeting-sky-end-table-enh5.jpeg', 'images/projects/earth-meeting-sky-end-table/earth-meeting-sky-end-table-enh6.jpeg', 'images/projects/earth-meeting-sky-end-table/earth-meeting-sky-end-table-enh7.jpeg'],
    description: 'Introducing the “Earth Meeting Sky” End Table.\n\nThis is my second collaboration with my friend Wendy. I had been wanting to build a pair of nightstands, so I reached out with the idea of incorporating her handmade tiles into the design. As with our last collaboration, I wanted the Arizona influence to feel simple and subtle. Wendy did an amazing job with these tiny tiles. The circular tiles are incredibly hard to fire apparently, because they warp so much during glazing and like I said Wendy is pretty amazing.\n\nThe piece brings earth and sky together: cactus and wood resemble the desert landscape, while the soft sky-blue tiles introduce the color. Its form also draws from the Chinese idea of 天圆地方, which translates to “round heaven and square earth”. The round tiles and square shelf echo that balance, a concept traditionally associated with harmony between heaven and earth. That sense of connection is what gave the piece its name. May “Earth Meeting Sky” bring a little stability, balance, and harmony into your home.',
    captions: ['“Earth Meeting Sky” end table in solid wood.', 'A sculptural form made for everyday use.', 'A closer look at the material and construction.', 'Details that reward a second look.', 'The wood grain carries the composition.', 'Built with care for the home.', 'A useful piece with a distinct presence.']
  },
  {
    slug: 'thea-bed-end-bench', title: '“Thea” Bed-End Bench', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/projects/thea-bed-end-bench/thea-bed-end-bench-enh1.jpeg', 'images/projects/thea-bed-end-bench/thea-bed-end-bench-enh2.jpeg', 'images/projects/thea-bed-end-bench/thea-bed-end-bench-enh3.jpeg', 'images/projects/thea-bed-end-bench/thea-bed-end-bench-enh4.jpeg'],
    description: 'A handmade bench designed for the end of the bed, balancing a generous resting surface with the quiet character of solid wood.',
    captions: ['“Thea” bed-end bench in solid wood.', 'A useful surface with a calm presence.', 'The grain and proportions shape the piece.', 'Built for the daily rhythm of home.']
  },
  {
    slug: 'sms-whiskey-cabinet', title: '“SMS” Whiskey Cabinet', category: 'storage', label: 'Storage & display', materials: 'Walnut, maple inlay & brass',
    images: ['images/projects/sms-whiskey-cabinet/sms-whiskey-cabinet-enh1.jpeg', 'images/projects/sms-whiskey-cabinet/sms-whiskey-cabinet-enh2.jpeg'],
    description: 'This piece is the physical epitome of my research and a gift of gratitude for my advisor. Its geometric form follows the solution path of our novel Shifted Maximum Subarray (SMS) algorithm, bringing personal research into the physical language of the cabinet.',
    captions: ['A cabinet shaped by the solution path of the SMS algorithm.', 'Maple inlay and brass details reward a closer look.']
  },
  {
    slug: 'tantalus-whiskey-cabinet', title: '“Tantalus” Whiskey Cabinet', category: 'storage', label: 'Storage & display', materials: 'Walnut & solid brass hinges',
    images: ['images/projects/tantalus-whiskey-cabinet/tantalus-whiskey-cabinet-enh1.jpeg', 'images/projects/tantalus-whiskey-cabinet/tantalus-whiskey-cabinet-enh2.jpeg', 'images/projects/tantalus-whiskey-cabinet/tantalus-whiskey-cabinet-enh3.jpeg', 'images/projects/tantalus-whiskey-cabinet/tantalus-whiskey-cabinet-enh4.jpeg'],
    description: 'The hand-cut dovetail joints speak to the time and care that went into every corner, while the cove-cut front adds depth and texture that feels just right in hand. Solid brass hinges finish a lasting home for good whiskey and even better moments.',
    captions: ['“Tantalus” whiskey cabinet in walnut.', 'A cove-cut front adds depth and texture.', 'Hand-cut dovetails at the case corner.', 'Solid brass hardware for a subtle shine.']
  },
  {
    slug: 'round-whiskey-cabinet', title: 'Round Whiskey Cabinet', category: 'storage', label: 'Storage & display', materials: 'Hardwood & brass',
    images: ['images/projects/round-whiskey-cabinet/round-whisky-cabinet-enh1.jpeg', 'images/projects/round-whiskey-cabinet/round-whisky-cabinet-enh2.jpeg', 'images/projects/round-whiskey-cabinet/round-whisky-cabinet-enh3.jpeg', 'images/projects/round-whiskey-cabinet/round-whisky-cabinet-enh4.jpeg'],
    description: 'A compact cabinet that gives the ritual of a good drink its own considered place. Rounded proportions soften the form while the interior is designed for easy, everyday use.',
    captions: ['A rounded cabinet with a quiet presence.', 'The curved profile from the side.', 'A close look at the cabinet’s joinery and finish.', 'Built to make an evening ritual feel special.']
  },
  {
    slug: 'serenity-coffee-table', title: '“Serenity” Coffee Table', category: 'furniture', label: 'Furniture', materials: 'Solid 8/4 walnut, hard wax oil',
    images: ['images/projects/serenity-coffee-table/serenity-coffee-table-enh1.jpeg', 'images/projects/serenity-coffee-table/serenity-coffee-table-enh2.jpeg', 'images/projects/serenity-coffee-table/serenity-coffee-table-enh3.jpeg'],
    description: 'A commission that began with a client’s preferred style and table legs, then became a lesson in translating ideas into a practical, balanced design. The finished table is solid 8/4 walnut, finished in hard wax oil, and measures 48 × 20 inches.',
    captions: ['“Serenity” coffee table in solid walnut.', 'A warm, restrained focal point for the living room.', 'The finished 48 × 20 inch commission.']
  },
  {
    slug: 'coffee-table', title: 'Coffee Table', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/projects/coffee-table/coffe-table-enh1.jpeg', 'images/projects/coffee-table/coffee-table-2.JPG', 'images/projects/coffee-table/coffee-table-3.JPG'],
    description: 'A low, functional table made to bring warmth and a quiet focal point to the room. The details are kept simple so the grain and proportion can do the talking.',
    captions: ['A handmade coffee table at home in the living room.', 'Low, useful proportions for daily life.', 'A detail of the table’s clean form.']
  },
  {
    slug: 'entryway-table', title: 'Entryway Table', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/projects/entryway-table/entry-way-table-enh1.jpeg', 'images/projects/entryway-table/entry-way-table-enh2.jpeg', 'images/projects/entryway-table/entry-way-table-enh3.jpeg'],
    description: 'A custom entryway piece for the small rituals of arriving home—somewhere to set down keys, pause, and start again.',
    captions: ['A welcoming first impression.', 'Designed for the daily rhythm of coming home.', 'A close look at the wood grain and form.']
  },
  {
    slug: 'desk', title: 'Desk', category: 'furniture', label: 'Furniture', materials: 'Solid wood',
    images: ['images/projects/desk/desk-enh1.jpeg'],
    description: 'A dedicated workspace made with durable materials and an emphasis on calm, everyday use.',
    captions: ['A grounded workspace built for focused days.']
  },
  {
    slug: 'bookshelf', title: 'Bookshelf', category: 'storage', label: 'Storage & display', materials: 'Solid wood',
    images: ['images/projects/bookshelf/bookshelf-1.JPG', 'images/projects/bookshelf/bookshelf-2.JPG', 'images/projects/bookshelf/bookshelf-3.JPG'],
    description: 'A bookshelf made to give books, records, and everyday objects a considered home. Open shelving keeps the composition light while making room for a life in progress.',
    captions: ['A bookshelf for books, records, and found objects.', 'Open shelves keep the piece visually light.', 'Built storage that becomes part of the room.']
  },
  {
    slug: 'oakton-shoe-rack', title: '“Oakton” Shoe Rack', category: 'furniture', label: 'Furniture', materials: 'Hardwood with live edge & sapwood',
    images: ['images/projects/oakton-shoe-rack/oakton-shoerack-enh1.jpeg', 'images/projects/oakton-shoe-rack/oakton-shoerack-enh2.jpeg', 'images/projects/oakton-shoe-rack/oakton-shoerack-enh3.jpeg'],
    description: 'My first project after moving to Northern Virginia, made because a new home calls for useful furniture. Inspired by the work of @encurtis, it pairs dovetails on a curve with an intentional live edge and sapwood color variation.',
    captions: ['“Oakton” shoe rack, made for a new home.', 'Curved dovetails are tucked into the structure.', 'The bench top’s natural color variation is part of the design.']
  },
  {
    slug: '0731-tennis-racket-holder', title: '“0731” Tennis Racket Holder', category: 'storage', label: 'Storage & display', materials: 'Hardwood & custom brass pins',
    images: ['images/projects/0731-tennis-racket-holder/0731-tennis-rack-enh1.jpeg', 'images/projects/0731-tennis-racket-holder/0731-tennis-rack-enh2.jpeg', 'images/projects/0731-tennis-racket-holder/0731-tennis-rack-enh3.jpeg', 'images/projects/0731-tennis-racket-holder/0731-tennis-rack-enh4.jpeg', 'images/projects/0731-tennis-racket-holder/0731-tennis-rack-enh5.jpeg'],
    description: 'Built as a 30th-birthday gift for a friend in another state, this rack had to ship flat: zero glue, zero fasteners, just joinery. Inspired by cable-stayed bridges in our hometown, mortise-and-tenon joints are held together by tension and finished with custom brass pins.',
    captions: ['“0731” tennis racket holder, named for our hometown area code.', 'A flat-pack design held together by pure joinery.', 'Mortise-and-tenon joints are locked by tension.', 'Custom brass pins secure the crossbar.', 'A gift and a nod to a lifelong friendship.']
  },
  {
    slug: 'cutting-boards', title: 'Cutting Boards', category: 'objects', label: 'Small objects', materials: 'Hardwood',
    images: ['images/projects/cutting-boards/cutting-board-enh1.jpeg', 'images/projects/cutting-boards/cutting-board-enh2.jpeg', 'images/projects/cutting-boards/cutting-board-enh3.jpeg', 'images/projects/cutting-boards/cutting-board-enh4.jpeg', 'images/projects/cutting-boards/cutting-board-enh6.jpeg', 'images/projects/cutting-boards/cutting-board-enh7.jpeg'],
    description: 'Handmade hardwood cutting boards built for daily use in the kitchen. Each one celebrates grain, color, and a surface that gets better with a little life on it.',
    captions: ['Handmade hardwood for the everyday kitchen.', 'A study in grain and color.', 'Made for chopping, serving, and keeping close at hand.', 'Durable material with a warm feel.', 'Simple details, solid construction.', 'A functional object with its own character.']
  },
  {
    slug: 'hades-jewelry-box', title: '“Hades” Jewelry Box', category: 'objects', label: 'Small objects', materials: 'Curly walnut & shop-made lamination',
    images: ['images/projects/hades-jewelry-box/hades-box-enh1.jpeg', 'images/projects/hades-jewelry-box/hades-box-enh2.jpeg', 'images/projects/hades-jewelry-box/hades-box-enh3.jpeg', 'images/projects/hades-jewelry-box/hades-box-enh4.jpeg'],
    description: 'One of my favorite boxes, featuring a coopered door and shop-made lamination. The curly walnut is the undeniable highlight: its chatoyance—the razzle-dazzle—makes the piece catch the eye from every angle.',
    captions: ['“Hades” jewelry box in curly walnut.', 'A coopered door shapes the front.', 'The wood’s chatoyance shifts with the light.', 'Shop-made lamination brings the form together.']
  },
  {
    slug: 'jewelry-box', title: 'Jewelry Box', category: 'objects', label: 'Small objects', materials: 'Solid wood',
    images: ['images/projects/jewelry-box/jewelry-box-enh1.jpeg', 'images/projects/jewelry-box/jewelry-box-enh2.jpeg', 'images/projects/jewelry-box/jewelry-box-enh3.jpeg', 'images/projects/jewelry-box/jewelry-box-enh4.jpeg', 'images/projects/jewelry-box/jewelry-box-enh5.jpeg', 'images/projects/jewelry-box/jewelry-box-enh6.jpeg', 'images/projects/jewelry-box/jewelry-box-enh7.jpeg'],
    description: 'A series of keepsake boxes made with small-scale joinery, careful proportions, and room for the objects that matter most. Each box is meant to feel as considered in the hand as it looks on a shelf.',
    captions: ['A keepsake box made to be opened often.', 'Small-scale joinery and quiet proportions.', 'A detail of the box’s fitted construction.', 'Built to give treasured objects a home.', 'The grain is allowed to lead the design.', 'A useful object made with patience.', 'A lasting place for small things.']
  },
  {
    slug: 'sonoran-tissue-box', title: '“Sonoran” Tissue Box', category: 'objects', label: 'Small objects', materials: 'Walnut, quarter-sawn white oak & handmade tile',
    images: ['images/projects/sonoran-tissue-box/sonoran-tissue-box-enh1.jpeg', 'images/projects/sonoran-tissue-box/sonoran-tissue-box-enh2.jpeg', 'images/projects/sonoran-tissue-box/sonoran-tissue-box-enh3.jpeg', 'images/projects/sonoran-tissue-box/sonoran-tissue-box-enh4.jpeg', 'images/projects/sonoran-tissue-box/sonoran-tissue-box-enh5.jpeg', 'images/projects/sonoran-tissue-box/sonoran-tissue-box-enh6.jpeg'],
    description: 'A collaboration with @wendy.hilli, inspired by Arizona. The walnut carcass uses half-blind dovetails and the lid is quarter-sawn white oak; handmade tiles carry cactus and flower imprints. It is a small object built to hold a much larger story.',
    captions: ['“Sonoran” tissue box, a collaboration inspired by Arizona.', 'Walnut carcass with half-blind dovetails.', 'A quarter-sawn white-oak lid.', 'Handmade tile carries cactus impressions.', 'Flower motifs make each side tell a story.', 'A small, singular object made to be kept.']
  },
  {
    slug: 'mushroom-side-table', title: '“Mushroom” Side Table', category: 'furniture', label: 'Furniture', materials: 'Oak with a hint of walnut',
    images: ['images/projects/mushroom-side-table/mushroom-side-table-enh1.jpeg', 'images/projects/mushroom-side-table/mushroom-side-table-enh2.jpeg'],
    description: 'The final project of a summer at NovaLabs, and part of an ongoing series of end tables exploring new design ideas and joinery. Its form is inspired by mushrooms—one of my favorite foods—and remains a prototype with plenty of room to evolve.',
    captions: ['A mushroom-inspired side table in oak and walnut.', 'A prototype exploring balance and leg joinery.']
  },
  {
    slug: 'nova-end-table', title: '“Nova” End Table', category: 'furniture', label: 'Furniture', materials: '8/4 ash, dark tint',
    images: ['images/projects/nova-end-table/nova-side-table-enh1.jpeg', 'images/projects/nova-end-table/nova-side-table-enh2.jpeg', 'images/projects/nova-end-table/nova-side-table-enh3.jpeg', 'images/projects/nova-end-table/nova-side-table-enh4.jpeg'],
    description: 'Inspired by the client’s rounded dining table and its pronounced round-over profile. The dark tint contrasts with the dining table while complementing the lighter tone of the couch.',
    captions: ['“Nova” end table in 8/4 ash.', 'Rounded edges echo the client’s dining table.', 'The dark finish balances the light surrounding room.', 'A dark-tinted ash surface with a quiet presence.']
  },
  {
    slug: 'kachina-tree-end-table', title: '“Kachina Tree” End Table', category: 'furniture', label: 'Furniture', materials: 'Oak, India ink & hard wax oil',
    images: ['images/projects/kachina-tree-end-table/kachina-tree-end-table-enh1.jpeg', 'images/projects/kachina-tree-end-table/kachina-tree-end-table-enh2.jpeg', 'images/projects/kachina-tree-end-table/kachina-tree-end-table-enh3.jpeg', 'images/projects/kachina-tree-end-table/kachina-tree-end-table-enh4.jpeg', 'images/projects/kachina-tree-end-table/kachina-tree-end-table-enh5.jpeg', 'images/projects/kachina-tree-end-table/kachina-tree-end-table-enh6.jpeg', 'images/hoodoos.JPG'],
    description: 'Inspired by Sedona’s lesser-known Kachina Tree Cave, where a certain angle reveals a tree framed inside a cave. The legs invite the same search for perspective at home, while complementary curves in the top and base echo the way the tree and cave complete one another.',
    captions: ['“Kachina Tree” end table, viewed through its sculptural legs.', 'Complementary curves connect the top and base.', 'A different angle reveals a new composition.', 'The oak form shifts with each view.', 'The legs invite a new perspective.', 'India ink and hard wax oil deepen the grain.', 'A desert landscape that helped start the idea.']
  }
];
