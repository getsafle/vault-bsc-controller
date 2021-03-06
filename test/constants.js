module.exports = {
    HD_WALLET_12_MNEMONIC_TEST_OTHER: 'orange lecture tiger surround narrow much novel arrange sample balance weapon bacon',
    HD_WALLET_12_MNEMONIC: 'affair entry detect broom axis crawl found valve bamboo taste broken hundred',
    HD_WALLET_24_MNEMONIC: 'begin pyramid grit rigid mountain stamp legal item result peace wealth supply satoshi elegant roof identify furnace march west chicken pen gorilla spot excuse',

    TESTING_MESSAGE_1: "ThisMessageOneIsForTesting",
    TESTING_MESSAGE_2: "This_message_two_is_for_testing",
    TESTING_MESSAGE_3: "This message three is for testing",

    EXTERNAL_ACCOUNT_PRIVATE_KEY: "0xbcb7a8680126610ca94440b020280f9ef82194a4dc2760653073b5f5b150c9c3",
    EXTERNAL_ACCOUNT_ADDRESS: "0x9E1447ea3F6abA7a5D344B360B95Fd9BAE049448",
    EXTERNAL_ACCOUNT_WRONG_PRIVATE_KEY_1: "random_private_key",
    EXTERNAL_ACCOUNT_WRONG_PRIVATE_KEY_2: "0xbcb7a8680126610ca94440b020280f9ef829ad26637bfb5cc",
    EXTERNAL_ACCOUNT_WRONG_PRIVATE_KEY_3: "QUWL7cmUp9Cj9DF3gLFqqSipopXyzuF4QXmDNV3ZTZ28GB6Ug98Z",

    TRANSACTION_TYPE: {
        NATIVE_TRANSFER: "NATIVE_TRANSFER",
        CONTRACT_TRANSACTION: "CONTRACT_TRANSACTION",
    },
    TRANSFER_BSC: {
        BSC_RECEIVER: '0xd27189917dd3E4B0e9eB731eCEe358254520FA01', // generated from HD_WALLET_12_MNEMONIC_TEST_OTHER
        BSC_AMOUNT: 13
    },
    TOKEN_CONTRACT: '0x2c7ac5a8d7e0b8406f9F47004E8092e5B0755326',
    CONTRACT_TXN: {
        BSC_CONTRACT: '0x0028E1248B2aA90843af835eb52d1a6bB73Cc037', // contract address
        BSC_AMOUNT_TO_CONTRACT: 0
    },
    BSC_NETWORK: {
        MAINNET: {
            NETWORK: "MAINNET",
            CHAIN_ID: 56,
            URL: 'https://bsc-dataseed1.binance.org'
        },
        TESTNET: {
            NETWORK: "TESTNET",
            CHAIN_ID: 97,
            URL: 'https://data-seed-prebsc-1-s1.binance.org:8545'
        }
    }
}