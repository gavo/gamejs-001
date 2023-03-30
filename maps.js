/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
 */

const emojis = {
  "-": " ",
  O: "🚪",
  X: "💣",
  I: "🎁",
  PLAYER: "😺",
  PLAYER_COLLISION: "🙀",
  PLAYER_LEVELUP: "😸",
  BOMB_COLLISION: "🎆", //
  GAME_OVER: "👎",
  WIN: "🏆",
  HEART: "❤️",
};

const maps = [];

maps.push(`
    OXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    IXXXXXXXXX
  `);
maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
maps.push(`
    OXXXXX---I
    -XXXXX-XXX
    -XXXXX-XXX
    -XXXXX-XXX
    -XX----XXX
    -XX-XXXXXX
    -XX-XXXXXX
    -XX-XXXXXX
    -XX-XXXXXX
    ----XXXXXX
  `);
maps.push(`
    XXXXXXXXXO
    XXXXXXXXX-
    X---------
    X-XXXXXXXX
    X-------XX
    XXXXXXX-XX
    XXXXXXX-XX
    X-------XX
    X-XXXXXXXX
    X---IXXXXX
`);
maps.push(`
    IXXX------
    -XXX-XXXX-
    -XXX-XXXX-
    --XX-XXXX-
    X-XX-XXXX-
    X----XXXX-
    XXXXXXXXX-
    XXXX---XX-
    XXXX-X-XX-
    XXXXOX----
`);
maps.push(`
    OX---X---I
    -X-X-X-XXX
    -X-X-X-XXX
    -X-X-X-XXX
    -X-X-X-XXX
    -X-X-X-XXX
    -X-X-X-XXX
    -X-X-X-XXX
    -X-X-X-XXX
    ---X---XXX
  `);
maps.push(`
  ---------O
  -XXXXXXXXX
  ----------
  XXXXXXXXX-
  ----------
  -XXXXXXXXX
  ----------
  XXXXXXXXX-
  ----------
  IXXXXXXXXX
`);
maps.push(`
    ---X---XXI
    -X-X-X-X--
    -X-X-X-X-X
    -X-X-X-X-X
    -X-X-X-X-X
    -X-X-X-X-X
    -X-X-X-X-X
    -X-X-X-X-X
    -X-X-X-X-X
    OX---X---X
`);
maps.push(`
    ---------O
    -XXXXXXXXX
    -X---X---X
    -X-X---X--
    -X-XXXXXX-
    -X-----X--
    -XXXXX-X-X
    -X---X-X--
    -X-X-X-XX-
    ---X---XXI
  `);
