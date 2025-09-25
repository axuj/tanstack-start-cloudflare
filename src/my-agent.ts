import { Agent } from 'agents'

interface MyState {
  counter: number
}

export class MyAgent extends Agent<Env, MyState> {
  initialState = {
    counter: 0,
  }

  async getState() {
    return this.state
  }
}
