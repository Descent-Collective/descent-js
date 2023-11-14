import { Eip1193Provider, SigningKey, ethers } from 'ethers';
import { ICollateral, IContract, INetwork, IProvider, ISigner } from './types';
import { Contract } from './libs/contract';
import Addresses from './contracts/addresses/base.json';
import abis from './contracts/abis';
import {
  burnCurrency,
  collateralizeVault,
  getVaultInfo,
  mintCurrency,
  withdrawCollateral,
} from './services/vault';

export class DescentClass {
  protected signer: ISigner;
  protected provider: IProvider;
  private vaultContract: IContract;
  private collateral: ICollateral;

  constructor(signer: ISigner, provider: IProvider, collateral: ICollateral) {
    this.provider = provider;
    this.signer = signer;
    this.collateral = collateral;
    this.vaultContract = Contract(
      Addresses.VAULT,
      abis.CoreVaultAbi,
      this.signer
    );
  }

  /**
   * @dev Gets a vault detail by it's ID
   * @param vaultId Vault ID
   * @returns The Vault information
   */
  public async getVaultInfo(vaultAddress: string) {
    const vault = await getVaultInfo(
      vaultAddress,
      this.collateral,
      this.vaultContract
    );
    return vault;
  }

  public async borrowCurrency(
    amount: string,
    ownerAddress: string,
    recipientAddress: string
  ) {
    const response = await mintCurrency(
      amount,
      this.collateral,
      ownerAddress,
      recipientAddress,
      this.vaultContract
    );
    return response;
  }

  /**
   * @dev repay borrowed xNGN for a particular vault
   * @param amount amount of xNGN to repay
   * @param vaultID vault id to repay xNGN for
   * @returns vaultDebt
   */
  public async repayCurrency(amount: string, ownerAddress: string) {
    const response = await burnCurrency(
      amount,
      this.collateral,
      ownerAddress,
      this.vaultContract
    );
    return response;
  }

  /**
   * @dev withdraw usdc for a particular vault
   * @param collateralAmount amount of unlocked collateral to withdraw
   * @param vaultID vault id to withdraw usdc from
   * @returns unlockedCollateral
   */
  public async withdrawCollateral(
    collateralAmount: string,
    ownerAddress: string
  ) {
    const response = await withdrawCollateral(
      collateralAmount,
      this.collateral,
      ownerAddress,
      this.vaultContract
    );
    return response;
  }

  /**
   * @dev deposit usdc for a particular vault
   * @param collateralAmount amount of unlocked collateral to withdraw
   * @param vaultID vault id to withdraw usdc from
   * @returns unlockedCollateral
   */
  public async depositCollateral(
    collateralAmount: string,
    ownerAddress: string
  ) {
    const response = await collateralizeVault(
      collateralAmount,
      this.collateral,
      ownerAddress,
      this.vaultContract
    );
    return response;
  }
}
async function create(
  requestType: INetwork,
  options: {
    ethereum?: Eip1193Provider | any;
    rpcUrl?: string;
    privateKey?: any | SigningKey;
    collateral: ICollateral;
  }
) {
  try {
    let provider: any;
    let signer: any;
    if (requestType == INetwork.https) {
      provider = new ethers.AbstractProvider(options?.rpcUrl);
      signer = new ethers.Wallet(options.privateKey, provider);
    }
    if (requestType == INetwork.browser) {
      provider = new ethers.BrowserProvider(options?.ethereum);
      signer = await provider.getSigner();
    }
    if (options.ethereum) {
      provider = new ethers.BrowserProvider(options?.ethereum);
    }

    const descent = new DescentClass(signer, provider, options.collateral);
    return descent;
  } catch (e) {
    const error = ErrorMessage(e);

    return error;
  }
}

const Descent = {
  create,
};

export default Descent;
