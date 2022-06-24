const TodoRepository = require('../src/todoRepository');
const { describe, it, before, afterEach } = require('mocha');
const { expect } = require('chai');
const { createSandbox } = require('sinon');

describe('todoRepository', () => {
  let todoRepository;
  let sandbox;

  before(() => {
    todoRepository = new TodoRepository();
    sandbox = createSandbox();
  });
  
  afterEach(() =>{
    sandbox.restore();
  });

  describe('methods signature', () => {
    it('should call find from lokijs', () => {
      const mockDatabase = [
        {
          name: 'Disney',
          age: 31,
          meta: { revision: 0, created: 1611439752647, version: 0 },
          '$loki': 1
        },
        {
          name: 'Londe',
          age: 11,
          meta: { revision: 0, created: 1611439752647, version: 0 },
          '$loki': 2
        }
      ];

      const functionName = "find";
      const expectedReturn = mockDatabase;

      sandbox.stub(
        todoRepository.schedule,
        functionName
      ).returns(expectedReturn);

      const result = todoRepository.list();
      expect(result).to.be.deep.equal(expectedReturn);
      expect(todoRepository.schedule[functionName].calledOnce).to.be.ok;
    });

    it('should call insertOne from lokijs', () => {
      const functionName = "insertOne";
      const expectedReturn = true;

      sandbox.stub(
        todoRepository.schedule,
        functionName
      ).returns(expectedReturn);

      const data = {
        name: 'Erik'
      };

      const result = todoRepository.create(data);
      expect(result).to.be.ok;
      expect(todoRepository.schedule[functionName].calledOnceWithExactly(data)).to.be.ok;
    });
  });
});
