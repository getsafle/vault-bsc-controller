### 1.0.0 (2021-12-1)

##### BSC Keyring Implementation

- Implemented Keyring functionality to enable account generation, export keys and signing methods

### 1.0.0 (2021-12-23)

##### Package name updation and gas limit check

- Update package name to vault-bsc-controller
- Added gasLimit check which calculating the gasFees of a transaction.

### 1.0.1 (2022-01-21)

##### Implement import wallet functionality

- Added importWallet() to import account using privateKey.

### 1.1.0 (2022-02-16)

##### Implement get balance functionality

- Added getBalance() to fetch the balance in native currency.

### 1.2.0 (2022-03-05)

##### Implement sign functionality

- Added sign() to sign a message or transaction and get signature along with v,r,s.

### 1.2.1 (2023-06-21)

- update import wallet to accept private key with or without '0x’ prefixed


### 1.2.2 (2023-07-05)

- Adding badges to readme.md

### 1.2.3 (2023-11-27)

- Updated node version to 18x

### 1.2.4 (2023-11-30)

- Add gas limit and gas estimation in getFees()
- updated tests for getFees() update