import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';

@Module
class App extends VuexModule {
  public version: string = '0.1.0';
  public activeIndex: string | number = '1';

  @Mutation
  private SET_ACTIVEINDEX(activeIndex: string) {
    this.activeIndex = activeIndex;
  }

  @Action
  private modificatio_active(activeIndex: string) {
    this.SET_ACTIVEINDEX(activeIndex);
  }
}

export default App;

