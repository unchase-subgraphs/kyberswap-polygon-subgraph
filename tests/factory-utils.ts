import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  PoolCreated,
  SetFeeConfiguration,
  SetFeeToSetter
} from "../generated/Factory/Factory"

export function createPoolCreatedEvent(
  token0: Address,
  token1: Address,
  pool: Address,
  ampBps: BigInt,
  totalPool: BigInt
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("ampBps", ethereum.Value.fromUnsignedBigInt(ampBps))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "totalPool",
      ethereum.Value.fromUnsignedBigInt(totalPool)
    )
  )

  return poolCreatedEvent
}

export function createSetFeeConfigurationEvent(
  feeTo: Address,
  governmentFeeBps: i32
): SetFeeConfiguration {
  let setFeeConfigurationEvent = changetype<SetFeeConfiguration>(newMockEvent())

  setFeeConfigurationEvent.parameters = new Array()

  setFeeConfigurationEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo))
  )
  setFeeConfigurationEvent.parameters.push(
    new ethereum.EventParam(
      "governmentFeeBps",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(governmentFeeBps))
    )
  )

  return setFeeConfigurationEvent
}

export function createSetFeeToSetterEvent(
  feeToSetter: Address
): SetFeeToSetter {
  let setFeeToSetterEvent = changetype<SetFeeToSetter>(newMockEvent())

  setFeeToSetterEvent.parameters = new Array()

  setFeeToSetterEvent.parameters.push(
    new ethereum.EventParam(
      "feeToSetter",
      ethereum.Value.fromAddress(feeToSetter)
    )
  )

  return setFeeToSetterEvent
}
