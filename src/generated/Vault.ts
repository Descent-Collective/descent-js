/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from 'ethers';
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from './common';

export declare namespace IVault {
  export type RateInfoStruct = {
    rate: BigNumberish;
    accumulatedRate: BigNumberish;
    lastUpdateTime: BigNumberish;
  };

  export type RateInfoStructOutput = [
    rate: bigint,
    accumulatedRate: bigint,
    lastUpdateTime: bigint,
  ] & { rate: bigint; accumulatedRate: bigint; lastUpdateTime: bigint };
}

export interface VaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | 'CURRENCY_TOKEN'
      | 'DEFAULT_ADMIN_ROLE'
      | 'accruedFees'
      | 'baseRateInfo'
      | 'burnCurrency'
      | 'collateralMapping'
      | 'createCollateralType'
      | 'debt'
      | 'deny'
      | 'depositCollateral'
      | 'getRoleAdmin'
      | 'grantRole'
      | 'hasRole'
      | 'liquidate'
      | 'mintCurrency'
      | 'paidFees'
      | 'pause'
      | 'recoverToken'
      | 'rely'
      | 'relyMapping'
      | 'renounceRole'
      | 'revokeRole'
      | 'status'
      | 'supportsInterface'
      | 'unpause'
      | 'updateBaseRate'
      | 'updateCollateralData'
      | 'updateCollateralRate'
      | 'updateFeedContract'
      | 'updatePrice'
      | 'updateStabilityModule'
      | 'vaultMapping'
      | 'withdrawCollateral'
      | 'withdrawFees',
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | 'CollateralDeposited'
      | 'CollateralTypeAdded'
      | 'CollateralWithdrawn'
      | 'CurrencyBurned'
      | 'CurrencyMinted'
      | 'FeesPaid'
      | 'Liquidated'
      | 'RoleAdminChanged'
      | 'RoleGranted'
      | 'RoleRevoked',
  ): EventFragment;

  encodeFunctionData(functionFragment: 'CURRENCY_TOKEN', values?: undefined): string;
  encodeFunctionData(functionFragment: 'DEFAULT_ADMIN_ROLE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'accruedFees', values?: undefined): string;
  encodeFunctionData(functionFragment: 'baseRateInfo', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'burnCurrency',
    values: [AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'collateralMapping', values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: 'createCollateralType',
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'debt', values?: undefined): string;
  encodeFunctionData(functionFragment: 'deny', values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: 'depositCollateral',
    values: [AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'getRoleAdmin', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'grantRole', values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: 'hasRole', values: [BytesLike, AddressLike]): string;
  encodeFunctionData(
    functionFragment: 'liquidate',
    values: [AddressLike, AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'mintCurrency',
    values: [AddressLike, AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'paidFees', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'recoverToken', values: [AddressLike, AddressLike]): string;
  encodeFunctionData(functionFragment: 'rely', values: [AddressLike]): string;
  encodeFunctionData(functionFragment: 'relyMapping', values: [AddressLike, AddressLike]): string;
  encodeFunctionData(functionFragment: 'renounceRole', values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: 'revokeRole', values: [BytesLike, AddressLike]): string;
  encodeFunctionData(functionFragment: 'status', values?: undefined): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'updateBaseRate', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'updateCollateralData',
    values: [AddressLike, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCollateralRate',
    values: [AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'updateFeedContract', values: [AddressLike]): string;
  encodeFunctionData(functionFragment: 'updatePrice', values: [AddressLike, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'updateStabilityModule', values: [AddressLike]): string;
  encodeFunctionData(functionFragment: 'vaultMapping', values: [AddressLike, AddressLike]): string;
  encodeFunctionData(
    functionFragment: 'withdrawCollateral',
    values: [AddressLike, AddressLike, AddressLike, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'withdrawFees', values: [AddressLike, BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'CURRENCY_TOKEN', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'DEFAULT_ADMIN_ROLE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'accruedFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'baseRateInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnCurrency', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'collateralMapping', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'createCollateralType', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'debt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'deny', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositCollateral', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRoleAdmin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'grantRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'hasRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'mintCurrency', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paidFees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recoverToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rely', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'relyMapping', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'revokeRole', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'status', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateBaseRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateCollateralData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateCollateralRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateFeedContract', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateStabilityModule', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vaultMapping', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawCollateral', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawFees', data: BytesLike): Result;
}

export namespace CollateralDepositedEvent {
  export type InputTuple = [owner: AddressLike, amount: BigNumberish];
  export type OutputTuple = [owner: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollateralTypeAddedEvent {
  export type InputTuple = [collateralAddress: AddressLike];
  export type OutputTuple = [collateralAddress: string];
  export interface OutputObject {
    collateralAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollateralWithdrawnEvent {
  export type InputTuple = [owner: AddressLike, to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [owner: string, to: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CurrencyBurnedEvent {
  export type InputTuple = [owner: AddressLike, amount: BigNumberish];
  export type OutputTuple = [owner: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CurrencyMintedEvent {
  export type InputTuple = [owner: AddressLike, amount: BigNumberish];
  export type OutputTuple = [owner: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesPaidEvent {
  export type InputTuple = [owner: AddressLike, amount: BigNumberish];
  export type OutputTuple = [owner: string, amount: bigint];
  export interface OutputObject {
    owner: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiquidatedEvent {
  export type InputTuple = [
    owner: AddressLike,
    liquidator: AddressLike,
    currencyAmountPaid: BigNumberish,
    collateralAmountCovered: BigNumberish,
  ];
  export type OutputTuple = [
    owner: string,
    liquidator: string,
    currencyAmountPaid: bigint,
    collateralAmountCovered: bigint,
  ];
  export interface OutputObject {
    owner: string;
    liquidator: string;
    currencyAmountPaid: bigint;
    collateralAmountCovered: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [role: BytesLike, previousAdminRole: BytesLike, newAdminRole: BytesLike];
  export type OutputTuple = [role: string, previousAdminRole: string, newAdminRole: string];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [role: BytesLike, account: AddressLike, sender: AddressLike];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [role: BytesLike, account: AddressLike, sender: AddressLike];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Vault extends BaseContract {
  connect(runner?: ContractRunner | null): Vault;
  waitForDeployment(): Promise<this>;

  interface: VaultInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;

  CURRENCY_TOKEN: TypedContractMethod<[], [string], 'view'>;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], 'view'>;

  accruedFees: TypedContractMethod<[], [bigint], 'view'>;

  baseRateInfo: TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        rate: bigint;
        accumulatedRate: bigint;
        lastUpdateTime: bigint;
      },
    ],
    'view'
  >;

  burnCurrency: TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  collateralMapping: TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        IVault.RateInfoStructOutput,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
      ] & {
        totalDepositedCollateral: bigint;
        totalBorrowedAmount: bigint;
        liquidationThreshold: bigint;
        liquidationBonus: bigint;
        rateInfo: IVault.RateInfoStructOutput;
        paidFees: bigint;
        price: bigint;
        debtCeiling: bigint;
        collateralFloorPerPosition: bigint;
        additionalCollateralPercision: bigint;
        exists: boolean;
      },
    ],
    'view'
  >;

  createCollateralType: TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _rate: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      _debtCeiling: BigNumberish,
      _collateralFloorPerPosition: BigNumberish,
    ],
    [void],
    'nonpayable'
  >;

  debt: TypedContractMethod<[], [bigint], 'view'>;

  deny: TypedContractMethod<[_reliedUpon: AddressLike], [void], 'nonpayable'>;

  depositCollateral: TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], 'view'>;

  grantRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], 'nonpayable'>;

  hasRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], 'view'>;

  liquidate: TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _owner: AddressLike,
      _to: AddressLike,
      _currencyAmountToPay: BigNumberish,
    ],
    [void],
    'nonpayable'
  >;

  mintCurrency: TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  paidFees: TypedContractMethod<[], [bigint], 'view'>;

  pause: TypedContractMethod<[], [void], 'nonpayable'>;

  recoverToken: TypedContractMethod<
    [_tokenAddress: AddressLike, _to: AddressLike],
    [void],
    'nonpayable'
  >;

  rely: TypedContractMethod<[_relyUpon: AddressLike], [void], 'nonpayable'>;

  relyMapping: TypedContractMethod<[arg0: AddressLike, arg1: AddressLike], [boolean], 'view'>;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    'nonpayable'
  >;

  revokeRole: TypedContractMethod<[role: BytesLike, account: AddressLike], [void], 'nonpayable'>;

  status: TypedContractMethod<[], [bigint], 'view'>;

  supportsInterface: TypedContractMethod<[interfaceId: BytesLike], [boolean], 'view'>;

  unpause: TypedContractMethod<[], [void], 'nonpayable'>;

  updateBaseRate: TypedContractMethod<[_baseRate: BigNumberish], [void], 'nonpayable'>;

  updateCollateralData: TypedContractMethod<
    [_collateralToken: AddressLike, _param: BigNumberish, _data: BigNumberish],
    [void],
    'nonpayable'
  >;

  updateCollateralRate: TypedContractMethod<
    [_collateralToken: AddressLike, _rate: BigNumberish],
    [void],
    'nonpayable'
  >;

  updateFeedContract: TypedContractMethod<[_feedContract: AddressLike], [void], 'nonpayable'>;

  updatePrice: TypedContractMethod<
    [_collateralAddress: AddressLike, _price: BigNumberish],
    [void],
    'nonpayable'
  >;

  updateStabilityModule: TypedContractMethod<[_stabilityModule: AddressLike], [void], 'nonpayable'>;

  vaultMapping: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        depositedCollateral: bigint;
        borrowedAmount: bigint;
        accruedFees: bigint;
        lastTotalAccumulatedRate: bigint;
      },
    ],
    'view'
  >;

  withdrawCollateral: TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  withdrawFees: TypedContractMethod<
    [_collateralToken: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;

  getFunction(nameOrSignature: 'CURRENCY_TOKEN'): TypedContractMethod<[], [string], 'view'>;
  getFunction(nameOrSignature: 'DEFAULT_ADMIN_ROLE'): TypedContractMethod<[], [string], 'view'>;
  getFunction(nameOrSignature: 'accruedFees'): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(nameOrSignature: 'baseRateInfo'): TypedContractMethod<
    [],
    [
      [bigint, bigint, bigint] & {
        rate: bigint;
        accumulatedRate: bigint;
        lastUpdateTime: bigint;
      },
    ],
    'view'
  >;
  getFunction(
    nameOrSignature: 'burnCurrency',
  ): TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(nameOrSignature: 'collateralMapping'): TypedContractMethod<
    [arg0: AddressLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        IVault.RateInfoStructOutput,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        boolean,
      ] & {
        totalDepositedCollateral: bigint;
        totalBorrowedAmount: bigint;
        liquidationThreshold: bigint;
        liquidationBonus: bigint;
        rateInfo: IVault.RateInfoStructOutput;
        paidFees: bigint;
        price: bigint;
        debtCeiling: bigint;
        collateralFloorPerPosition: bigint;
        additionalCollateralPercision: bigint;
        exists: boolean;
      },
    ],
    'view'
  >;
  getFunction(
    nameOrSignature: 'createCollateralType',
  ): TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _rate: BigNumberish,
      _liquidationThreshold: BigNumberish,
      _liquidationBonus: BigNumberish,
      _debtCeiling: BigNumberish,
      _collateralFloorPerPosition: BigNumberish,
    ],
    [void],
    'nonpayable'
  >;
  getFunction(nameOrSignature: 'debt'): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'deny',
  ): TypedContractMethod<[_reliedUpon: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'depositCollateral',
  ): TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'getRoleAdmin',
  ): TypedContractMethod<[role: BytesLike], [string], 'view'>;
  getFunction(
    nameOrSignature: 'grantRole',
  ): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'hasRole',
  ): TypedContractMethod<[role: BytesLike, account: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'liquidate',
  ): TypedContractMethod<
    [
      _collateralToken: AddressLike,
      _owner: AddressLike,
      _to: AddressLike,
      _currencyAmountToPay: BigNumberish,
    ],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'mintCurrency',
  ): TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(nameOrSignature: 'paidFees'): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(nameOrSignature: 'pause'): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'recoverToken',
  ): TypedContractMethod<[_tokenAddress: AddressLike, _to: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'rely',
  ): TypedContractMethod<[_relyUpon: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'relyMapping',
  ): TypedContractMethod<[arg0: AddressLike, arg1: AddressLike], [boolean], 'view'>;
  getFunction(
    nameOrSignature: 'renounceRole',
  ): TypedContractMethod<[role: BytesLike, callerConfirmation: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'revokeRole',
  ): TypedContractMethod<[role: BytesLike, account: AddressLike], [void], 'nonpayable'>;
  getFunction(nameOrSignature: 'status'): TypedContractMethod<[], [bigint], 'view'>;
  getFunction(
    nameOrSignature: 'supportsInterface',
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], 'view'>;
  getFunction(nameOrSignature: 'unpause'): TypedContractMethod<[], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'updateBaseRate',
  ): TypedContractMethod<[_baseRate: BigNumberish], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'updateCollateralData',
  ): TypedContractMethod<
    [_collateralToken: AddressLike, _param: BigNumberish, _data: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateCollateralRate',
  ): TypedContractMethod<
    [_collateralToken: AddressLike, _rate: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateFeedContract',
  ): TypedContractMethod<[_feedContract: AddressLike], [void], 'nonpayable'>;
  getFunction(
    nameOrSignature: 'updatePrice',
  ): TypedContractMethod<
    [_collateralAddress: AddressLike, _price: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'updateStabilityModule',
  ): TypedContractMethod<[_stabilityModule: AddressLike], [void], 'nonpayable'>;
  getFunction(nameOrSignature: 'vaultMapping'): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [
      [bigint, bigint, bigint, bigint] & {
        depositedCollateral: bigint;
        borrowedAmount: bigint;
        accruedFees: bigint;
        lastTotalAccumulatedRate: bigint;
      },
    ],
    'view'
  >;
  getFunction(
    nameOrSignature: 'withdrawCollateral',
  ): TypedContractMethod<
    [_collateralToken: AddressLike, _owner: AddressLike, _to: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;
  getFunction(
    nameOrSignature: 'withdrawFees',
  ): TypedContractMethod<
    [_collateralToken: AddressLike, _amount: BigNumberish],
    [void],
    'nonpayable'
  >;

  getEvent(
    key: 'CollateralDeposited',
  ): TypedContractEvent<
    CollateralDepositedEvent.InputTuple,
    CollateralDepositedEvent.OutputTuple,
    CollateralDepositedEvent.OutputObject
  >;
  getEvent(
    key: 'CollateralTypeAdded',
  ): TypedContractEvent<
    CollateralTypeAddedEvent.InputTuple,
    CollateralTypeAddedEvent.OutputTuple,
    CollateralTypeAddedEvent.OutputObject
  >;
  getEvent(
    key: 'CollateralWithdrawn',
  ): TypedContractEvent<
    CollateralWithdrawnEvent.InputTuple,
    CollateralWithdrawnEvent.OutputTuple,
    CollateralWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: 'CurrencyBurned',
  ): TypedContractEvent<
    CurrencyBurnedEvent.InputTuple,
    CurrencyBurnedEvent.OutputTuple,
    CurrencyBurnedEvent.OutputObject
  >;
  getEvent(
    key: 'CurrencyMinted',
  ): TypedContractEvent<
    CurrencyMintedEvent.InputTuple,
    CurrencyMintedEvent.OutputTuple,
    CurrencyMintedEvent.OutputObject
  >;
  getEvent(
    key: 'FeesPaid',
  ): TypedContractEvent<
    FeesPaidEvent.InputTuple,
    FeesPaidEvent.OutputTuple,
    FeesPaidEvent.OutputObject
  >;
  getEvent(
    key: 'Liquidated',
  ): TypedContractEvent<
    LiquidatedEvent.InputTuple,
    LiquidatedEvent.OutputTuple,
    LiquidatedEvent.OutputObject
  >;
  getEvent(
    key: 'RoleAdminChanged',
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: 'RoleGranted',
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: 'RoleRevoked',
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    'CollateralDeposited(address,uint256)': TypedContractEvent<
      CollateralDepositedEvent.InputTuple,
      CollateralDepositedEvent.OutputTuple,
      CollateralDepositedEvent.OutputObject
    >;
    CollateralDeposited: TypedContractEvent<
      CollateralDepositedEvent.InputTuple,
      CollateralDepositedEvent.OutputTuple,
      CollateralDepositedEvent.OutputObject
    >;

    'CollateralTypeAdded(address)': TypedContractEvent<
      CollateralTypeAddedEvent.InputTuple,
      CollateralTypeAddedEvent.OutputTuple,
      CollateralTypeAddedEvent.OutputObject
    >;
    CollateralTypeAdded: TypedContractEvent<
      CollateralTypeAddedEvent.InputTuple,
      CollateralTypeAddedEvent.OutputTuple,
      CollateralTypeAddedEvent.OutputObject
    >;

    'CollateralWithdrawn(address,address,uint256)': TypedContractEvent<
      CollateralWithdrawnEvent.InputTuple,
      CollateralWithdrawnEvent.OutputTuple,
      CollateralWithdrawnEvent.OutputObject
    >;
    CollateralWithdrawn: TypedContractEvent<
      CollateralWithdrawnEvent.InputTuple,
      CollateralWithdrawnEvent.OutputTuple,
      CollateralWithdrawnEvent.OutputObject
    >;

    'CurrencyBurned(address,uint256)': TypedContractEvent<
      CurrencyBurnedEvent.InputTuple,
      CurrencyBurnedEvent.OutputTuple,
      CurrencyBurnedEvent.OutputObject
    >;
    CurrencyBurned: TypedContractEvent<
      CurrencyBurnedEvent.InputTuple,
      CurrencyBurnedEvent.OutputTuple,
      CurrencyBurnedEvent.OutputObject
    >;

    'CurrencyMinted(address,uint256)': TypedContractEvent<
      CurrencyMintedEvent.InputTuple,
      CurrencyMintedEvent.OutputTuple,
      CurrencyMintedEvent.OutputObject
    >;
    CurrencyMinted: TypedContractEvent<
      CurrencyMintedEvent.InputTuple,
      CurrencyMintedEvent.OutputTuple,
      CurrencyMintedEvent.OutputObject
    >;

    'FeesPaid(address,uint256)': TypedContractEvent<
      FeesPaidEvent.InputTuple,
      FeesPaidEvent.OutputTuple,
      FeesPaidEvent.OutputObject
    >;
    FeesPaid: TypedContractEvent<
      FeesPaidEvent.InputTuple,
      FeesPaidEvent.OutputTuple,
      FeesPaidEvent.OutputObject
    >;

    'Liquidated(address,address,uint256,uint256)': TypedContractEvent<
      LiquidatedEvent.InputTuple,
      LiquidatedEvent.OutputTuple,
      LiquidatedEvent.OutputObject
    >;
    Liquidated: TypedContractEvent<
      LiquidatedEvent.InputTuple,
      LiquidatedEvent.OutputTuple,
      LiquidatedEvent.OutputObject
    >;

    'RoleAdminChanged(bytes32,bytes32,bytes32)': TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    'RoleGranted(bytes32,address,address)': TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    'RoleRevoked(bytes32,address,address)': TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
