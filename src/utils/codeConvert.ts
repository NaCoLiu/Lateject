
import crypto from "crypto";

const zero = 0n;
const one = 1n;
const n256 = 256n;

class ByteSwap {
    static from_little_endian(bytes: any[] | Buffer | any) {
        let result = zero;
        let base = one;
        bytes.forEach(function (byte: string | number | bigint | boolean) {
            result = result + (base * (BigInt(byte)));
            base = base * n256;
        });
        return result;
    }

    static from_big_endian(bytes: any[] | Uint8Array) {
        return this.from_little_endian(bytes.reverse());
    }

    static to_little_endian(bigNumber: number | bigint | any) {
        let result = new Uint8Array(8);
        let i = 0;
        while (bigNumber > zero) {
            result[i] = Number(bigNumber % n256);
            bigNumber = bigNumber / n256;
            i += 1;
        }
        return result;
    }

    static to_big_endian(bytes: any) {
        return this.to_little_endian(bytes).reverse();
    }
}
const alnum = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
const ralnum = {
    'A': 0n,
    'B': 1n,
    'C': 2n,
    'D': 3n,
    'E': 4n,
    'F': 5n,
    'G': 6n,
    'H': 7n,
    'J': 8n,
    'K': 9n,
    'L': 10n,
    'M': 11n,
    'N': 12n,
    'P': 13n,
    'Q': 14n,
    'R': 15n,
    'S': 16n,
    'T': 17n,
    'U': 18n,
    'V': 19n,
    'W': 20n,
    'X': 21n,
    'Y': 22n,
    'Z': 23n,
    '2': 24n,
    '3': 25n,
    '4': 26n,
    '5': 27n,
    '6': 28n,
    '7': 29n,
    '8': 30n,
    '9': 31n,
}


interface RootObject {
  '2': bigint;
  '3': bigint;
  '4': bigint;
  '5': bigint;
  '6': bigint;
  '7': bigint;
  '8': bigint;
  '9': bigint;
  A: bigint;
  B: bigint;
  C: bigint;
  D: bigint;
  E: bigint;
  F: bigint;
  G: bigint;
  H: bigint;
  J: bigint;
  K: bigint;
  L: bigint;
  M: bigint;
  N: bigint;
  P: bigint;
  Q: bigint;
  R: bigint;
  S: bigint;
  T: bigint;
  U: bigint;
  V: bigint;
  W: bigint;
  X: bigint;
  Y: bigint;
  Z: bigint;
}
const default_steam_id = 0x110000100000000n

let b32 = (input: number | bigint | [key: string | number]) => {
    let res = ""
    // Make input into a big endian
    input = ByteSwap.from_big_endian(ByteSwap.to_little_endian(input))

    for (let i = 0; i < 13; i++) {
        if (i == 4 || i == 9) {
            res += "-"
        }
        res += alnum[(input & 0x1fn) as unknown as number]
        input >>= 5n
    }

    return res
}

let rb32 = (input: [key: keyof RootObject][]) => {
    let res = 0n

    for (let i = 0; i < 13; i++) {
        if (i == 4 || i == 9) {
            input = input.slice(1)
        }
        res |= ralnum[(input[0]) as unknown as keyof RootObject] << (5n * BigInt(i))
        input = input.slice(1)
    }

    return ByteSwap.from_big_endian(ByteSwap.to_little_endian(res))
}

let hash_steam_id = (id: any) => {
    let account_id = id & 0xFFFFFFFFn
    let strange_steam_id = account_id | 0x4353474F00000000n

    let bytes = ByteSwap.to_little_endian(strange_steam_id)

    let hash = crypto.createHash("md5").update(bytes).digest("hex")
    let buf = Buffer.from(hash, "hex").slice(0, 4)

    return ByteSwap.from_little_endian(buf)
}

let make_u64 = (hi: number | bigint | any, lo: number | bigint | any) => {
    return hi << 32n | lo
}

class FriendCode {
    static encode(steamid: string | number | bigint | boolean) {
        steamid = BigInt(steamid)

        let h = hash_steam_id(steamid)

        let r = 0n
        for (let i = 0; i < 8; i++) {
            let id_nibble = steamid & 0xFn
            steamid >>= 4n

            let hash_nibble = (h >> BigInt(i)) & 1n

            let a = r << 4n | id_nibble

            r = make_u64(r >> 28n, a)
            r = make_u64(r >> 31n, a << 1n | hash_nibble)
        }
        let res = b32(r)

        if (res.slice(0, 4) === "AAAA") {
            res = res.slice(5)
        }

        return res
    }

    static decode(friend_code: string) {
        if (friend_code.length != 10) return "";

        if (friend_code.slice(0, 5) != "AAAA-") {
            friend_code = "AAAA-" + friend_code
        }

        let val = rb32(friend_code as unknown as [key: keyof RootObject][])
        let id = 0n

        for (let i = 0; i < 8; i++) {
            val >>= 1n
            let id_nibble = val & 0xFn
            val >>= 4n

            id <<= 4n
            id |= id_nibble
        }

        return (id | default_steam_id).toString()
    }
}


export function codeConvert(name: string): string{
    
    if(name.length < 17){
        console.log('The number you entered is less than 17 digits');
        return 'error'
        
    }else{
        let result = FriendCode.encode(name);
        return result;
        
    }

}



