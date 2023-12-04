import {
  ethers,
  BigNumberish,
  AddressLike,
  formatUnits,
  NonceManager,
  parseUnits,
  parseEther,
} from 'ethers';
import { ICollateral, IContract } from '../types';
import { Transaction } from '../libs/transactions';
import { getContractAddress } from '../contracts/getContractAddresses';
import { Internal } from '../libs/internal';
import { VaultRouter__factory } from '../generated/factories';
import ContractManager from '../contracts';
import { getxNGNBalance } from '../libs/utils';

export enum VaultHealthFactor {
  UNSAFE = 'UNSAFE',
  SAFE = 'SAFE',
}
export enum VaultOperations {
  DepositCollateral = 0,
  WithdrawCollateral = 1,
  MintCurrency = 2,
  BurnCurrency = 3,
}

// const getVaultInfo = async (
//   ownerAddress: string | number,
//   collateral: ICollateral,
//   contract: IContract,
// ) => {
//   let collateralAddress;
//   if (collateral == ICollateral.USDC) {
//     collateralAddress = Addresses.USDC;
//   }

//   try {
//     // FIXME: Refactor with MultiStaticcall
//     const vaultData = await contract.getVaultInfo(Addresses.VAULT, collateralAddress, ownerAddress);
//     const depositedCollateral = Number(ethers.formatUnits(vaultData.depositedCollateral));
//     const availableCollateral = await contract.getMaxWithdrawable(
//       Addresses.VAULT,
//       collateralAddress,
//       ownerAddress,
//     );
//     const availablexNGN = await contract.getMaxBorrowable(
//       Addresses.VAULT,
//       collateralAddress,
//       ownerAddress,
//     );
//     const healthFactorCheck = await contract.checkHealthFactor(
//       Addresses.VAULT,
//       collateralAddress,
//       ownerAddress,
//     );

//     const healthFactor =
//       healthFactorCheck < 1 //
//         ? VaultHealthFactor.UNSAFE // Unsafe - Vault is Dangerous
//         : VaultHealthFactor.SAFE; // Safe - Vault is Safe

//     const price = '999';
//     const collateralValue = depositedCollateral * Number(price);

//     const currentCollateralRatio =
//       Number(ethers.formatUnits(vaultData.borrowedAmount)) / collateralValue / (100 / 1);

//     return {
//       healthFactor,
//       depositedCollateral,
//       collateralLocked: depositedCollateral - Number(ethers.formatUnits(availableCollateral)),
//       borrowedAmount: ethers.formatUnits(vaultData.borrowedAmount),
//       accruedFees: ethers.formatUnits(vaultData.accruedFees),
//       currentCollateralRatio: currentCollateralRatio,
//       availableCollateral: ethers.formatUnits(availableCollateral),
//       availablexNGN: ethers.formatUnits(availablexNGN),
//       currentRate: ethers.formatUnits(vaultData.lastTotalAccumulatedRate),
//     };
//   } catch (e) {
//     const message = createError(e);
//     return message;
//   }
// };

const getVault = async (
  collateral: ICollateral,
  owner: string,
  chainId: string,
  contract: ContractManager,
) => {
  const collateralAddress: any = getContractAddress(collateral)[chainId];
  const vaultContractAddress: any = getContractAddress('Vault')[chainId];

  const getVaultInfo = (await contract.getVaultGetterContract()).getVault(
    vaultContractAddress,
    collateralAddress,
    owner,
  );

  return getVaultInfo;
};
const collateralizeVault = async (
  amount: string,
  collateral: ICollateral,
  owner: string,
  chainId: string,
  transaction: Transaction,
  internal: Internal,
) => {
  const collateralAddress: any = getContractAddress(collateral)[chainId];
  const vaultContractAddress: any = getContractAddress('Vault')[chainId];

  const _amount = BigInt(amount) * BigInt(1e6);

  // build transaction object
  const to: any = getContractAddress('VaultRouter')[chainId];
  let iface = internal.getInterface(VaultRouter__factory.abi);
  const data = iface.encodeFunctionData('multiInteract', [
    [vaultContractAddress],
    [VaultOperations.DepositCollateral],
    [collateralAddress],
    [ethers.ZeroAddress],
    [_amount],
  ]);

  const txConfig = await internal.getTransactionConfig({
    from: owner,
    to,
    data: data,
  });

  const depositResResult = await transaction.send(txConfig, {});

  return depositResResult;
};
const withdrawCollateral = async (
  amount: string,
  collateral: ICollateral,
  owner: string,
  chainId: string,
  transaction: Transaction,
  internal: Internal,
  contract: ContractManager,
) => {
  const collateralAddress: any = getContractAddress(collateral)[chainId];
  const vaultContractAddress: any = getContractAddress('Vault')[chainId];

  const _amount = BigInt(amount) * BigInt(1e6);

  const to: any = getContractAddress('VaultRouter')[chainId];
  let iface = internal.getInterface(VaultRouter__factory.abi);

  // const maxWithdrawable = (await contract.getVaultGetterContract()).getMaxWithdrawable(
  //   vaultContractAddress,
  //   collateralAddress,
  //   owner,
  // );

  // const formattedMaxWithdrawable = parseUnits((await maxWithdrawable).toString(), 6);

  // console.log('formatted max withdrawable: ' + formattedMaxWithdrawable);

  // if (Number(amount) > Number((formattedMaxWithdrawable).toString())) {
  //   throw new Error(' Withdrawal amount is more than available collateral balance');
  // }

  // build transaction object
  const data = iface.encodeFunctionData('multiInteract', [
    [vaultContractAddress],
    [VaultOperations.WithdrawCollateral],
    [collateralAddress],
    [owner],
    [_amount],
  ]);
  const txConfig = await internal.getTransactionConfig({
    from: owner,
    to,
    data: data,
  });

  const withdrawResResult = await transaction.send(txConfig, {});

  return withdrawResResult;
};
const mintCurrency = async (
  amount: string,
  collateral: ICollateral,
  owner: string,
  chainId: string,
  transaction: Transaction,
  internal: Internal,
  contract: ContractManager,
) => {
  const collateralAddress: any = getContractAddress(collateral)[chainId];
  const vaultContractAddress: any = getContractAddress('Vault')[chainId];

  const _amount = BigInt(amount) * BigInt(1e18);

  // const maxBorrowable = (await contract.getVaultGetterContract()).getMaxBorrowable(
  //   vaultContractAddress,
  //   collateralAddress,
  //   owner,
  // );

  // const formattedmaxBorrowable =  parseEther((await maxBorrowable).toString());

  // if (Number(amount) > Number(formattedmaxBorrowable)) {
  //   throw new Error(' Borrow amount is more than available currency borrowable');
  // }

  // build transaction object
  const to: any = getContractAddress('VaultRouter')[chainId];
  let iface = internal.getInterface(VaultRouter__factory.abi);
  const data = iface.encodeFunctionData('multiInteract', [
    [vaultContractAddress],
    [VaultOperations.MintCurrency],
    [collateralAddress],
    [owner],
    [_amount],
  ]);
  const txConfig = await internal.getTransactionConfig({
    from: owner,
    to,
    data: data,
  });

  const mintResResult = await transaction.send(txConfig, {});

  return mintResResult;
};

const burnCurrency = async (
  amount: string,
  collateral: ICollateral,
  owner: string,
  chainId: string,
  transaction: Transaction,
  internal: Internal,
  contract: ContractManager,
) => {
  const collateralAddress: any = getContractAddress(collateral)[chainId];
  const vaultContractAddress: any = getContractAddress('Vault')[chainId];

  const _amount = BigInt(amount) * BigInt(1e18);

  // const balance = await (await contract.getCurrencyContract()).balanceOf(owner);

  // const formattedBalance = (await parseEther(balance.toString()));

  // if (Number(amount) > Number(formattedBalance.toString())) {
  //   throw new Error('Payback xNGN: Insufficient funds');
  // }

  // build transaction object
  const to: any = getContractAddress('VaultRouter')[chainId];
  let iface = internal.getInterface(VaultRouter__factory.abi);
  const data = iface.encodeFunctionData('multiInteract', [
    [vaultContractAddress],
    [VaultOperations.BurnCurrency],
    [collateralAddress],
    [owner],
    [_amount],
  ]);
  const txConfig = await internal.getTransactionConfig({
    from: owner,
    to,
    data: data,
  });

  const burnResult = await transaction.send(txConfig, {});

  return burnResult;
};

export { collateralizeVault, withdrawCollateral, mintCurrency, burnCurrency, getVault };
