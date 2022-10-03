<?php

namespace Tests\Unit;

use App\ExampleTester;
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_example()
    {
        new ExampleTester($this);
        // $this->assertTrue(true);
    }
}
