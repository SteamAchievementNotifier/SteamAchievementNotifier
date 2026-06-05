pub fn get16bits(data: &[u8], i: usize) -> u32 {
    u32::from(data[i]) | (u32::from(data[i + 1]) << 8)
}

/**
    Based on Chromium's reference implementation: https://chromium.googlesource.com/chromium/src/base/+/refs/heads/main/third_party/superfasthash/superfasthash.c
    
    This is a reimplementation in Rust and does not include or copy original source code. It is provided for compatibility purposes only, specifically for reproducing Chromium/Electron display identifier behaviour.

    Original algorithm and reference implementation are part of the Chromium project.
*/
pub fn super_fast_hash(data: &[u8]) -> u32 {
    if data.is_empty() {
        return 0;
    }

    let mut len = data.len() as u32;
    let mut hash = len;
    let mut tmp: u32;

    let mut i = 0usize;
    let rem = (len & 3) as usize;
    len >>= 2;

    for _ in 0..len {
        hash = hash.wrapping_add(get16bits(data, i));
        tmp = (get16bits(data, i + 2) << 11) ^ hash;
        hash = (hash << 16) ^ tmp;
        i += 4;

        hash = hash.wrapping_add(hash >> 11);
    }

    match rem {
        3 => {
            hash = hash.wrapping_add(get16bits(data, i));
            hash ^= hash << 16;
            hash ^= (data[i + 2] as i32 as u32) << 18;
            hash = hash.wrapping_add(hash >> 11);
        }
        2 => {
            hash = hash.wrapping_add(get16bits(data, i));
            hash ^= hash << 11;
            hash = hash.wrapping_add(hash >> 17);
        }
        1 => {
            hash = hash.wrapping_add(data[i] as u32);
            hash ^= hash << 10;
            hash = hash.wrapping_add(hash >> 1);
        }
        _ => {}
    }

    hash ^= hash << 3;
    hash = hash.wrapping_add(hash >> 5);
    hash ^= hash << 4;
    hash = hash.wrapping_add(hash >> 17);
    hash ^= hash << 25;
    hash = hash.wrapping_add(hash >> 6);
    
    hash
}