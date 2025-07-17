export const keycodes: Map<string,string> = new Map([
    ["CONTROLLEFT","CTRL"],
    ["METALEFT","META"],
    ["ALTLEFT","ALT"],
    ["ALTRIGHT","ALTGR"],
    ["METARIGHT","META"],
    ["CONTROLRIGHT","CTRL"],
    ["SHIFTLEFT","SHIFT"],
    ["INTLBACKSLASH","\\"],
    ["PERIOD","."],
    ["COMMA",","],
    ["SLASH","/"],
    ["SHIFTRIGHT","SHIFT"],
    ["SEMICOLON",";"],
    ["QUOTE","'"],
    ["BRACKETLEFT","["],
    ["BRACKETRIGHT","]"],
    ["BACKSLASH","#"],
    ["BACKQUOTE","`"],
    ["MINUS","-"],
    ["EQUAL","="],
    ["NUMPADDIVIDE","NUMDIV"],
    ["NUMPADMULTIPLY","NUMMULT"],
    ["NUMPADSUBTRACT","NUMSUB"],
    ["NUMPADADD","NUMADD"],
    ["NUMPADDECIMAL","NUMDEC"],
    ["ESCAPE","ESC"],
])

export const jstosteamkeycodes = new Map<string,string>([
    ["#","APOSTROPHE"],
    ["\\","BACKSLASH"],
    [".","PERIOD"],
    [",","COMMA"],
    ["/","SLASH"],
    [";","SEMICOLON"],
    ["`","BACKQUOTE"],
    ["'","QUOTE"],
    ["[","LBRACKET"],
    ["]","RBRACKET"],
    ["-","MINUS"],
    ["=","EQUAL"],
    ["NUMPAD0","PAD_0"],
    ["NUMPAD1","PAD_1"],
    ["NUMPAD2","PAD_2"],
    ["NUMPAD3","PAD_3"],
    ["NUMPAD4","PAD_4"],
    ["NUMPAD5","PAD_5"],
    ["NUMPAD6","PAD_6"],
    ["NUMPAD7","PAD_7"],
    ["NUMPAD8","PAD_8"],
    ["NUMPAD9","PAD_9"],
    ["NUMPADDIVIDE","PAD_DIVIDE"],
    ["NUMPADMULTIPLY","PAD_MULTIPLY"],
    ["NUMPADSUBTRACT","PAD_MINUS"],
    ["NUMPADADD","PAD_PLUS"],
    ["NUMPADDECIMAL","PAD_DECIMAL"],
])

// * = Capitalisation required
export const steamkeycodes = new Map<string,(number | string | null)[]>([
    ["KEY_A",[0x41,"a"]],
    ["KEY_B",[0x42,"b"]],
    ["KEY_C",[0x43,"c"]],
    ["KEY_D",[0x44,"d"]],
    ["KEY_E",[0x45,"e"]],
    ["KEY_F",[0x46,"f"]],
    ["KEY_G",[0x47,"g"]],
    ["KEY_H",[0x48,"h"]],
    ["KEY_I",[0x49,"i"]],
    ["KEY_J",[0x4A,"j"]],
    ["KEY_K",[0x4B,"k"]],
    ["KEY_L",[0x4C,"l"]],
    ["KEY_M",[0x4D,"m"]],
    ["KEY_N",[0x4E,"n"]],
    ["KEY_O",[0x4F,"o"]],
    ["KEY_P",[0x50,"p"]],
    ["KEY_Q",[0x51,"q"]],
    ["KEY_R",[0x52,"r"]],
    ["KEY_S",[0x53,"s"]],
    ["KEY_T",[0x54,"t"]],
    ["KEY_U",[0x55,"u"]],
    ["KEY_V",[0x56,"v"]],
    ["KEY_W",[0x57,"w"]],
    ["KEY_X",[0x58,"x"]],
    ["KEY_Y",[0x59,"y"]],
    ["KEY_Z",[0x5A,"z"]],
    ["KEY_SPACE",[0x20,"space"]],
    ["KEY_BACKSLASH",[0xDC,"backslash"]],
    ["KEY_COMMA",[0xBC,"comma"]],
    ["KEY_PERIOD",[0xBE,"period"]],
    ["KEY_SLASH",[0xBF,"slash"]],
    ["KEY_CAPSLOCK",[0x14,"capslock"]],
    ["KEY_SEMICOLON",[0xBA,"semicolon"]],
    ["KEY_BACKQUOTE",[0xDE,"grave"]],
    ["KEY_ENTER",[0x0D,"Return"]], // *
    ["KEY_TAB",[0x09,"Tab"]], // *
    ["KEY_APOSTROPHE",[null,"apostrophe"]],
    ["KEY_LBRACKET",[0xDB,"bracketleft"]],
    ["KEY_RBRACKET",[0xDD,"bracketright"]],
    ["KEY_NONE",[0xC0,""]],
    ["KEY_0",[0x30,"0"]],
    ["KEY_1",[0x31,"1"]],
    ["KEY_2",[0x32,"2"]],
    ["KEY_3",[0x33,"3"]],
    ["KEY_4",[0x34,"4"]],
    ["KEY_5",[0x35,"5"]],
    ["KEY_6",[0x36,"6"]],
    ["KEY_7",[0x37,"7"]],
    ["KEY_8",[0x38,"8"]],
    ["KEY_9",[0x39,"9"]],
    ["KEY_MINUS",[0xBD,"minus"]],
    ["KEY_EQUAL",[0xBB,"equal"]],
    ["KEY_BACKSPACE",[0x08,"BackSpace"]], // *
    ["KEY_INSERT",[0x2D,"Insert"]], // *
    ["KEY_DELETE",[0x2E,"Delete"]], // *
    ["KEY_HOME",[0x24,"Home"]], // *
    ["KEY_END",[0x23,"End"]], // *
    ["KEY_PAGEUP",[0x21,"Prior"]], // *
    ["KEY_PAGEDOWN",[0x22,"Next"]], // *
    ["KEY_UP",[0x26,"Up"]], // *
    ["KEY_DOWN",[0x28,"Down"]], // *
    ["KEY_LEFT",[0x25,"Left"]], // *
    ["KEY_RIGHT",[0x27,"Right"]], // *
    ["KEY_F1",[0x70,"F1"]],
    ["KEY_F2",[0x71,"F2"]],
    ["KEY_F3",[0x72,"F3"]],
    ["KEY_F4",[0x73,"F4"]],
    ["KEY_F5",[0x74,"F5"]],
    ["KEY_F6",[0x75,"F6"]],
    ["KEY_F7",[0x76,"F7"]],
    ["KEY_F8",[0x77,"F8"]],
    ["KEY_F9",[0x78,"F9"]],
    ["KEY_F10",[0x79,"F10"]],
    ["KEY_F11",[0x7A,"F11"]],
    ["KEY_F12",[0x7B,"F12"]],
    ["KEY_SCROLLLOCK",[0x91,"Scroll_Lock"]], // *
    ["KEY_BREAK",[0x13,"Break"]],
    ["KEY_PAD_0",[0x60,"KP_Insert"]], // *
    ["KEY_PAD_1",[0x61,"KP_End"]], // *
    ["KEY_PAD_2",[0x62,"KP_Down"]], // *
    ["KEY_PAD_3",[0x63,"KP_Next"]], // *
    ["KEY_PAD_4",[0x64,"KP_Left"]], // *
    ["KEY_PAD_5",[0x65,"KP_Begin"]], // *
    ["KEY_PAD_6",[0x66,"KP_Right"]], // *
    ["KEY_PAD_7",[0x67,"KP_Home"]], // *
    ["KEY_PAD_8",[0x68,"KP_Up"]], // *
    ["KEY_PAD_9",[0x69,"KP_Prior"]], // *
    ["KEY_NUMLOCK",[0x90,"Num_Lock"]], // *
    ["KEY_PAD_DIVIDE",[0x6F,"KP_Divide"]], // *
    ["KEY_PAD_MULTIPLY",[0x6A,"KP_Multiply"]], // *
    ["KEY_PAD_MINUS",[0x6D,"KP_Subtract"]], // *
    ["KEY_PAD_PLUS",[0x6B,"KP_Add"]], // *
    ["KEY_PAD_DECIMAL",[0x6E,"KP_Delete"]], // *
    // Not supported by Steam
    ["KEY_CTRL",[0xA2,"ctrl"]],
    ["KEY_SHIFT",[0xA0,"shift"]],
    ["KEY_ALT",[0xA4,"alt"]],
    ["KEY_ALTGR",[0xA5,"alt"]],
    ["KEY_ESC",[0x1B,"Escape"]], // *
    ["KEY_META",[0x5B,"super"]]
])

export const cssreplacemap = new Map<string,string>([
    ["'","QUOTE"],
    ['"',"DBLQUOTE"],
    ["\\","BACKSLASH"],
    ["`","BACKTICK"],
    [" ","SPACE"],
    ["!","EXCL"],
    ["#","HASH"],
    ["$","DOLLAR"],
    ["%","PERCENT"],
    ["&","AMPERSAND"],
    ["*","STAR"],
    ["+","PLUS"],
    [",","COMMA"],
    ["-","MINUS"],
    [".","PERIOD"],
    ["/","SLASH"],
    [":","COLON"],
    [";","SEMICOLON"],
    ["<","LT"],
    [">","GT"],
    ["=","EQUALS"],
    ["?","QUESTION"],
    ["@","AT"],
    ["^","CARET"],
    ["|","PIPE"],
    ["~","TILDE"],
    ["(","LBRACKET"],
    [")","RBRACKET"],
    ["[","LSQBRACKET"],
    ["]","RSQBRACKET"],
    ["{","LCURBRACKET"],
    ["}","RCURBRACKET"]
])

export const cssrevreplacemap = new Map<string,string>([...cssreplacemap].map(([key,value]) => [value,key]))